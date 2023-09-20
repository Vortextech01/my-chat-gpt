export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`flex items-center justify-center rounded-lg bg-black-700 p-2 px-4 shadow-sm transition-colors hover:bg-black-600 active:bg-black-800 ${
        className ?? ""
      }`}
    >
      {children}
    </button>
  );
}
