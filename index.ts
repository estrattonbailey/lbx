import tabbable from "tabbable";

function createGuard({ onfocus }) {
  const d = document.createElement("div");
  d.style.cssText = `
    width: 1px;
    height: 0px;
    padding: 0px;
    overflow: hidden;
    position: fixed;
    top: 1px;
    left: 1px;
  `;
  d.onfocus = onfocus;
  d.setAttribute("tabindex", "0");
  d.setAttribute("aria-hidden", "true");
  d.setAttribute("data-lockbox", "");
  return d;
}

export function lock(node: Element) {
  if (!node) return;

  const { activeElement } = document;

  let before: HTMLElement;
  let after: HTMLElement;
  const targets: HTMLElement[] = tabbable(node);

  if (!node.querySelector('[data-lockbox]')) {
    before = createGuard({
      onfocus() {
        const n = targets[targets.length - 1];
        if (n) n.focus();
      }
    });
    after = createGuard({
      onfocus() {
        const n = targets[0];
        if (n) n.focus();
      }
    });

    node.insertBefore(before, node.children[0]);
    node.appendChild(after);

    const n = targets[0];
    if (n) n.focus();
  }

  return function unlock() {
    node.removeChild(before);
    node.removeChild(after);

    (activeElement as HTMLElement).focus();
  };
}
