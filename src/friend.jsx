export default function Friend({ friend }) {
    return (
        <div className="friend-card">
            <h4>Name: {friend.name}</h4>
            <p>Email: {friend.email}</p>
            <p>Username: {friend.username}</p>
        </div>
    );
}
