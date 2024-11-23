



function RightSideBar({selectedUser,users = []}) {
    return (
        <div className='w-4/12 h-screen bg-gray-100 border-l ml-4 rounded-2xl flex flex-col gap-2 pt-4'>
            <div className="w-full bg-gray-100 border-l  rounded-2xl">
                {selectedUser && (
                    <div className="flex flex-col items-center">
                        <img
                            src={users.find((u) => u._id === selectedUser._id)?.profilePic}
                            alt="Profile"
                            className="w-20 h-20 rounded-full mb-4"
                        />
                        <h3 className="text-lg font-semibold">
                            {users.find((u) => u._id === selectedUser._id)?.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                            {users.find((u) => u._id === selectedUser._id)?.gender}
                        </p>
                        <button className="mt-4 btn btn-secondary">Start Video Call</button>
                        <button className="mt-2 btn btn-primary">Start Voice Call</button>
                    </div>
                )}
                {!selectedUser && (
                    <p className="text-gray-500">Select a user to view details.</p>
                )}
            </div>
            <div className="w-full bg-gray-100 border-l p-2 h-full">
                <h3 className="text-lg font-semibold mb-2 ">Friend Suggestions</h3>
                <ul className="space-y-4">
                    {users?.slice(0, 3).map((user) => (
                    <li key={user._id} className="flex items-center p-2 rounded-lg bg-gray-200">
                        <img
                        src={user.profilePic}
                        alt="Profile"
                        className="w-8 h-8 rounded-full mr-3"
                        />
                        <span className="font-medium">{user.name}</span>
                        <button className="ml-auto btn btn-primary">Add Friend</button>
                    </li>
                    ))}
                </ul>
            </div>


        </div>
    )
}

export default RightSideBar;