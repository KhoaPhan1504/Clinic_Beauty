import React , {useEffect, useState} from 'react';
import { 
  CardContactImg, CardContactItem,
  CardContactPro, CardImagePro,
  CardImgPro, CardInfoDescribe,
  CardInfoName, CardInfoPro,
  CardInfoTitle, CardProfessional,
  CardWrapperPro,
  Profession, ProfessionDesc, 
  ProfessionWrapper, ProInfoDescribe, 
  ProInfoTip, ProInfoTitle, 
  ProItem, ProItemRow, ProItemWrapper 
} from './Profession.style';
import { proData } from '../../../../../../data/ProfessionData/ProfessionData';

interface ProProps {
  id: number;
  cardImage: string;
  cardInfoTitle: string;
  cardInfoName: string;
  cardInfoDescribe: string;
	cardContactTwitter: string; 
	cardContactFB: string;
	cardContactInsta: string;
}

const ProfessionComponent:React.FC = () => {
  const [pros, setPros] = useState<ProProps[]>([]);

  const [activeCard, setActiveCard] = useState<number>(2);

  const handleMouseEnter = (id: number) => {
    setActiveCard(id);
  };

  const handleMouseLeave = () => {
    setActiveCard(2);
  };
 
  useEffect(() => {
    setPros(proData);
  }, []);

  return (
    <Profession>
			<ProfessionWrapper>
				<ProfessionDesc>
					<ProInfoTip>Professional Teams</ProInfoTip>
					<ProInfoTitle>The Professional expert</ProInfoTitle>
					<ProInfoDescribe>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</ProInfoDescribe>
				</ProfessionDesc>
				<ProItem>
					<ProItemWrapper>
						{pros.map((pro) => (
              <ProItemRow 
                key={pro.id}
                onMouseEnter={() => handleMouseEnter(pro.id)}
                onMouseLeave={handleMouseLeave}
                className={pro.id === activeCard ? 'active' : ''}
              >
							  <CardProfessional>
								  <CardWrapperPro data-id={pro.id}>
									  <CardImagePro>
										  <CardImgPro src={pro.cardImage} alt="" />
									  </CardImagePro>
                    <CardInfoPro>
                      <CardInfoTitle>{pro.cardInfoTitle}</CardInfoTitle>
                      <CardInfoName>{pro.cardInfoName}</CardInfoName>
                      <CardInfoDescribe>{pro.cardInfoDescribe}</CardInfoDescribe>
                    </CardInfoPro>
                    <CardContactPro>
                      <CardContactItem href=""><CardContactImg src={pro.cardContactTwitter} /></CardContactItem>
                      <CardContactItem href=""><CardContactImg src={pro.cardContactFB} /></CardContactItem>
                      <CardContactItem href=""><CardContactImg src={pro.cardContactInsta} /></CardContactItem>
                    </CardContactPro>
								  </CardWrapperPro>	
							  </CardProfessional>
						  </ProItemRow>
            ))}
					</ProItemWrapper>
				</ProItem>
			</ProfessionWrapper>
		</Profession>
  )
}

export default ProfessionComponent;