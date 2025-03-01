import ProjectDescription

let project = Project(
    name: "Test",
    targets: [
        .target(
            name: "Test",
            destinations: .iOS,
            product: .app,
            bundleId: "io.tuist.Test",
            infoPlist: .extendingDefault(
                with: [
                    "UILaunchStoryboardName": "LaunchScreen.storyboard",
                ]
            ),
            sources: ["Test/Sources/**"],
            resources: ["Test/Resources/**"],
            dependencies: []
        ),
        .target(
            name: "TestTests",
            destinations: .iOS,
            product: .unitTests,
            bundleId: "io.tuist.TestTests",
            infoPlist: .default,
            sources: ["Test/Tests/**"],
            resources: [],
            dependencies: [.target(name: "Test")]
        ),
    ]
)
