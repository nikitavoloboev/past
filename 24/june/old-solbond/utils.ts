export function classNames(...classes: (string | boolean | undefined)[]) {
	return classes.filter(Boolean).join(" ")
}

export const handleAttachmentClick = (
	event: React.MouseEvent<HTMLDivElement>,
) => {
	event.stopPropagation()
}
