import React, { ReactNode, forwardRef } from "react";

// 1. Tipos base
type PrimitiveProps = {
    className?: string;
    children?: ReactNode;
};

type Primitive<P = {}> = P & PrimitiveProps;

type PolymorphicProps<P = {}> = Primitive<P> & {
    asChild?: boolean;
};

// 2. Componente Polymórfico Base
const Polymorphic = forwardRef<HTMLElement, PolymorphicProps>((props, ref) => {
    const { asChild, children, ...rest } = props;
    const Comp = asChild ? "div" : "div";
    return (
        <Comp ref={null} {...rest}>
            {children}
        </Comp>
    );
});

// 3. Componentes Card
interface CardRootProps extends PolymorphicProps {
    variant?: "default" | "bordered";
}

const CardRoot = forwardRef<HTMLDivElement, CardRootProps>((props, ref) => {
    const { className = "", variant = "default", children, ...rest } = props;
    return (
        <Polymorphic ref={ref} className={`rounded-lg shadow-sm ${variant === "bordered" ? "border" : ""} ${className}`} {...rest}>
            {children}
        </Polymorphic>
    );
});

const CardTitle = forwardRef<HTMLHeadingElement, PolymorphicProps>((props, ref) => {
    const { className = "", children, ...rest } = props;
    return (
        <Polymorphic ref={ref} className={`text-xl font-semibold ${className}`} {...rest}>
            {children}
        </Polymorphic>
    );
});

const CardBody = forwardRef<HTMLDivElement, PolymorphicProps>((props, ref) => {
    const { className = "", children, ...rest } = props;
    return (
        <Polymorphic ref={ref} className={`p-6 ${className}`} {...rest}>
            {children}
        </Polymorphic>
    );
});

const CardFooter = forwardRef<HTMLDivElement, PolymorphicProps>((props, ref) => {
    const { className = "", children, ...rest } = props;
    return (
        <Polymorphic ref={ref} className={`px-6 py-4 border-t ${className}`} {...rest}>
            {children}
        </Polymorphic>
    );
});

// 4. Composición del componente Card
interface CardComponent extends React.ForwardRefExoticComponent<CardRootProps> {
    Title: typeof CardTitle;
    Body: typeof CardBody;
    Footer: typeof CardFooter;
}

const Card = CardRoot as CardComponent;
Card.Title = CardTitle;
Card.Body = CardBody;
Card.Footer = CardFooter;

// 5. Exportaciones
export { Card };
export type { CardRootProps, PolymorphicProps };
