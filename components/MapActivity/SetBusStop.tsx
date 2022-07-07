import { VFC } from "react"


type Props = {
	id: string
	name: string
}

const BusstopMarker: VFC<Props> = ({ id, name}) => {
	return (
		<div>
			<div title={name} />
		</div>
	)
}
export default BusstopMarker