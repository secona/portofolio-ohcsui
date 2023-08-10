/** Merge every truthy value to a string separated by a space */
export const cn = (...classnames: (string | undefined)[]) => {
  // `.filter(Boolean)` omits every falsy value in the array.
  return classnames.filter(Boolean).join(" ");
};

/** Extends props object with additional classnames */
export const cnProps = (
  props: Record<string, any>,
  ...classnames: string[]
) => {
  return { ...props, className: cn(props.className, ...classnames) };
};
