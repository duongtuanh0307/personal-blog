import { FC } from "react";

type ButtonVariant = "default" | "primary" | "secondary" | "outline";

type ButtonSize = "sm" | "md";

type Props = {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
};

const Button: FC<Props> = ({
  label,
  size = "sm",
  variant = "default",
  onClick,
}) => {
  const sizeClass = getSizeClass(size);
  const variantClass = getVariantClass(variant);
  return (
    <button onClick={onClick} className={`${sizeClass} ${variantClass}`}>
      {label}
    </button>
  );
};

const getVariantClass = (variant: ButtonVariant) => {
  switch (variant) {
    case "default":
      return "";
    case "primary":
      return "";
    case "secondary":
      return "";
    case "outline":
      return "";
    default:
      return "";
  }
};

const getSizeClass = (size: ButtonSize) => {
  switch (size) {
    case "sm":
      return "";
    case "md":
      return "";
    default:
      return "";
  }
};

export default Button;
