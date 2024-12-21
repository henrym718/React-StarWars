import React, { ComponentType, ReactElement } from "react";

// Definimos un tipo para las props que aceptará el componente "envuelto"
type AsChildProps<P = {}> = P & {
    children: React.ReactElement;
};

export const asChild = <P extends {}>(WrappedComponent: ComponentType<P>) => {
    return React.forwardRef<any, AsChildProps<P>>((props, ref) => {
        const { children, ...rest } = props;

        if (!React.Children.only(children)) {
            console.error("Componente con asChild debe tener un solo hijo");
            return null;
        }

        const child = React.Children.only(children) as ReactElement;

        const clonedChild = React.cloneElement(child, {
            ...rest,
            ...child.props,
            ref: ref,
        });

        return clonedChild;
    });
};
