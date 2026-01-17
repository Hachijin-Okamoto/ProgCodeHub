type TitleProps = {
  text: string;
  className?: string;
};

export default function Title({ text, className }: TitleProps) {
  return <h1 className={className}>{text}</h1>;
}
