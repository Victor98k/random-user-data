import useRandomUser from "../hooks/useRandomUser";

// Task 3: Display User Data
// Render the fetched user data on the webpage using JSX. Display at least the user's name,
// email, phone number, and profile picture.

function Home() {
  const { user, loading, error } = useRandomUser();
  //   Task 4: Implement Error Handling
  // Handle errors that may occur during the API request and display an error message if
  // fetching data fails
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching user</div>;
  return (
    <div>
      <h1>Random User Data</h1>
      {user && (
        <div>
          <h2>{`${user.name.first}`}</h2>
          <p>{`${user.email}`}</p>
          <p>{`${user.phone}`}</p>
          <img src={user.picture.large} alt="User profile pic" />
        </div>
      )}
    </div>
  );
}

export default Home;
