type BadgeProps = {
    children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
    return (
        <span className="rounded-full bg-violet-100 text-violet-700 px-4 py-2 text-sm font-medium">
            {children}
        </span>
    );
}