export const nest = <T extends { depth: number }>(items: T[]): any[] => {
  const root: any[] = [];
  const stack: any[] = [{ depth: 1, children: root }];

  for (const item of items) {
    while (stack[stack.length - 1].depth >= item.depth) {
      stack.pop();
    }

    const parent = stack[stack.length - 1];
    const newItem = { ...item, children: [] };

    parent.children.push(newItem);
    stack.push(newItem);
  }

  return root;
}