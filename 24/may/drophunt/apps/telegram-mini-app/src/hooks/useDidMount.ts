import { useEffect, useState } from 'react'

/** @returns True, if component was mounted. */
export function useDidMount(): boolean {
	const [didMount, setDidMount] = useState(false)

	useEffect(() => {
		setDidMount(true)
	}, [])

	return didMount
}
