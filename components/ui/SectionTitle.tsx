type Props = {
    title: string;
    subtitle?: string;
};

export default function SectionTitle({
    title,
    subtitle,
}: Props) {
    return (
        <div className="mb-12">
            {subtitle && (
                <p className="text-violet-600 font-semibold mb-3">
                    {subtitle}
                </p>
            )}

            <h2 className="h2">{title}</h2>
        </div>
    );
}