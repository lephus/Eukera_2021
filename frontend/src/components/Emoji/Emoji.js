import React from 'react';
import FacebookEmoji from 'react-facebook-emoji';


function Emoji() {
	return (
		<>

			<FacebookEmoji type="like" size="xs" on />
			<FacebookEmoji type="love" size="xs" />
			<FacebookEmoji type="wow" size="xs" />
			<FacebookEmoji type="angry" size="xs" />
			<FacebookEmoji type="haha" size="xs" />
			<FacebookEmoji type="sad" size="xs" />
		</>
	)
}

export default Emoji
