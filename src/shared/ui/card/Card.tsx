interface Props {
    children: React.ReactNode;
}

export function Card(props: Props) {
    const { children } = props;

    return <div className=" p-5 rounded-md bg-[#141514]">{children}</div>;
}
