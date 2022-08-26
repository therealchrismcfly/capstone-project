import useStore from '../../hooks/useStore';
import FavoritesCard from '../Card/favoritesCard';

import StyledCardlist from './styled';

function CardlistFavorites() {
	const cards = useStore(state => state.cards);

	return (
		<>
			<h1>Lieblingsübungen</h1>

			<StyledCardlist>
				{cards.map(card => {
					return <FavoritesCard key={card.id} card={card} />;
				})}
			</StyledCardlist>
		</>
	);
}

export default CardlistFavorites;
