import Feather from "@expo/vector-icons/build/Feather"
import Ionicons from "@expo/vector-icons/build/Ionicons"
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons"
import Octicons from "@expo/vector-icons/build/Octicons"
import { Tabs } from "expo-router"

import { TabBarButton } from "@/components/TabBarButton"
import { ThemedText, useThemeColor } from "@/components/Themed"
import { useBookmarkStore } from "@/store/bookmarkStore"
import { theme } from "@/theme"

export default function TabLayout() {
	const tabBarBackgroundColor = useThemeColor({
		light: theme.colorWhite,
		dark: theme.colorDarkestBlue,
	})

	const tabBarActiveTintColor = useThemeColor({
		light: theme.colorReactDarkBlue,
		dark: theme.colorWhite,
	})

	const tabBarInactiveTintColor = useThemeColor({
		light: theme.colorGrey,
		dark: `rgba(255, 255, 255, 0.35)`,
	})

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor,
				tabBarInactiveTintColor,
				tabBarStyle: {
					backgroundColor: tabBarBackgroundColor,
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					headerShown: false,
					tabBarButton: (props) => (
						<TabBarButton
							{...props}
							activeTintColor={tabBarActiveTintColor}
							inactiveTintColor={tabBarInactiveTintColor}
							icon={({ color }) => (
								<Feather size={24} name="calendar" color={color} />
							)}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="bookmarks"
				options={{
					headerStyle: {
						backgroundColor: tabBarBackgroundColor,
					},
					headerTitle: () => (
						<ThemedText fontSize={20} fontWeight="bold">
							Bookmarked sessions
						</ThemedText>
					),
					tabBarButton: (props) => (
						<TabBarButton
							{...props}
							activeTintColor={tabBarActiveTintColor}
							inactiveTintColor={tabBarInactiveTintColor}
							icon={({ color }) => <BookmarkIcon color={color} />}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="speakers"
				options={{
					headerStyle: {
						backgroundColor: tabBarBackgroundColor,
					},
					headerShown: false,
					headerTitle: () => (
						<ThemedText fontSize={20} fontWeight="bold">
							Speakers
						</ThemedText>
					),
					tabBarButton: (props) => (
						<TabBarButton
							{...props}
							activeTintColor={tabBarActiveTintColor}
							inactiveTintColor={tabBarInactiveTintColor}
							icon={({ color }) => (
								<Ionicons name="people" size={24} color={color} />
							)}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="info"
				options={{
					headerStyle: {
						backgroundColor: tabBarBackgroundColor,
					},
					headerTitle: () => (
						<ThemedText fontSize={20} fontWeight="bold">
							Info
						</ThemedText>
					),
					tabBarButton: (props) => (
						<TabBarButton
							{...props}
							activeTintColor={tabBarActiveTintColor}
							inactiveTintColor={tabBarInactiveTintColor}
							icon={({ color }) => (
								<Octicons size={24} name="info" color={color} />
							)}
						/>
					),
				}}
			/>
		</Tabs>
	)
}

const BookmarkIcon = ({ color }: { color: string }) => {
	const bookmarks = useBookmarkStore((state) => state.bookmarks)
	return (
		<MaterialCommunityIcons
			name={bookmarks.length ? "bookmark-check" : "bookmark"}
			size={24}
			color={color}
		/>
	)
}
