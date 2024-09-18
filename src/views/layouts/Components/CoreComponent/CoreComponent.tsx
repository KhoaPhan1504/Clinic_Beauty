import React, {useEffect, useState}  from 'react';
import { 
	Core, CoreCol, CoreItem, CoreItemCard, CoreWrapper, 
	InfoDescribe, InfoTip, 
	InfoTitle, TitleDesc 
} from './Core.style';
import cardsData from './../../../../data/CoreData/CoreData.json';
import { 
	CardDescribe, CardImage, 
	CardImg, CardInfo, 
	CardItem, CardName, 
	CardWrapper 
} from '../../../../components/Card/Card.style';

interface CoreProps {
  id: number;
  cardImage: string;
  cardInfoName: string;
  cardInfoDescribe: string;
}

const CoreComponent:React.FC = () => {
	const [cores, setCores] = useState<CoreProps[]>([]);

  useEffect(() => {
    setCores(cardsData);
  }, []);

  return (
    <Core>
			<CoreWrapper>
				<TitleDesc>
					<InfoTip>Main Services</InfoTip>
					<InfoTitle> Learn services to focus on your beauty</InfoTitle>
					<InfoDescribe>Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis</InfoDescribe>
				</TitleDesc>
				<CoreItem>
					<CoreCol>
						{cores.map((core) => (
							<CoreItemCard key={core.id}>
								<CardWrapper>
									<CardItem>
										<CardImage>
											<CardImg src={core.cardImage} alt={core.cardInfoName} />
										</CardImage>
										<CardInfo>
											<CardName>{core.cardInfoName}</CardName>
											<CardDescribe>{core.cardInfoDescribe}</CardDescribe>
										</CardInfo>
									</CardItem>
								</CardWrapper>
							</CoreItemCard>
						))}
					</CoreCol>
				</CoreItem>
			</CoreWrapper>
		</Core>
  )
}

export default CoreComponent;