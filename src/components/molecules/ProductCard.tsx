import { FC, ReactNode } from "react";

export type ProductCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const ProductCard: FC<ProductCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <dl
      style={{
        borderRadius: 8,
        border: "1px solid var(--primary)",
        paddingBlock: 16,
        paddingInline: 8,
      }}
    >
      <dt
        style={{
          fontSize: 20,
          fontWeight: "500",
          display: "flex",
          alignItems: "center",
          letterSpacing: 1,
        }}
      >
        <div
          style={{
            marginRight: 8,
          }}
        >
          {icon}
        </div>
        {title}
      </dt>
      <dd
        style={{
          marginTop: 8,
        }}
      >
        {description}
      </dd>
    </dl>
  );
};
