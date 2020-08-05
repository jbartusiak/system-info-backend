export interface Container {
    Id: string;
    Names: string[]
    Image: string,
    ImageId: string,
    Command: string,
    Created: number,
    Ports: [
        {
            IP: string,
            PrivatePort: number,
            PublicPort: number,
            Type: string
        }
    ],
    Labels: {},
    State: string,
    Status: string,
    HostConfig: {
        NetworkMode: string
    },
    NetworkSettings: {
        Networks: {
            bridge: {
                IPAMConfig: string,
                Links: string,
                Aliases: string,
                NetworkID: string,
                EndpointID: string,
                Gateway: string,
                IPAddress: string,
                IPPrefixLen: number,
                IPv6Gateway: string,
                GlobalIPv6Address: string,
                GlobalIPv6PrefixLen: number,
                MacAddress: string,
                DriverOpts: string
            }
        }
    },
    Mounts: []
}



