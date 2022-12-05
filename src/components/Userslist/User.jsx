export const User = ({name, email, deleteUser, id}) => {
	return (
		<>
			<p>
				name: <span>{name}</span>
			</p>
			<p>
				email: <span>{email}</span>
			</p>
			<button type="button" onClick={() => {
				deleteUser(id)
			 }}>Delete</button>
    </>
	)
};

// User.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	email: PropTypes.string.isRequired,
// 	id: PropTypes.string.isRequired,
// 		deleteUser: PropTypes.func.isRequired,	
// }