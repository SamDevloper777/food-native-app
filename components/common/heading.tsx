import { Text } from 'react-native'

const Heading = ({ heading }: { heading: string }) => (
    <Text className="text-3xl font-bold text-gray-900 mb-2 mt-3">
        {heading}
    </Text>
)

export default Heading