import React , {useEffect, useState} from 'react';
import { 
  CardContactImg,
  CardContactItem,
  CardContactPro,
  CardImagePro,
  CardImgPro,
  CardInfoDescribe,
  CardInfoName,
  CardInfoPro,
  CardInfoTitle,
  CardProfessional,
  CardWrapperPro,
  Profession, ProfessionDesc, 
  ProfessionWrapper, ProInfoDescibe, 
  ProInfoTip, ProInfoTitle, 
  ProItem, ProItemRow, ProItemWrapper 
} from './Profession.style';
import prosData from '../../../data/ProfessionData/ProfessionData.json';

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

const ProfessionComponent:React.FC<ProProps> = () => {
  const [pros, setPros] = useState<ProProps[]>([]);

  // const proItemRowRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    setPros(prosData);
  }, []);

  // useEffect(() => {
  //   const proItemRows = proItemRowRef.current;
  // })

  return (
    <Profession>
			<ProfessionWrapper>
				<ProfessionDesc>
					<ProInfoTip>Professional Teams</ProInfoTip>
					<ProInfoTitle>The Professional expert</ProInfoTitle>
					<ProInfoDescibe>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</ProInfoDescibe>
				</ProfessionDesc>
				<ProItem>
					<ProItemWrapper>
						{pros.map((pro) => (
              <ProItemRow key={pro.id}>
							  <CardProfessional>
								  <CardWrapperPro>
									  <CardImagePro>
										  <CardImgPro src={pro.cardImage} alt="" />
									  </CardImagePro>
                    <CardInfoPro>
                      <CardInfoTitle>{pro.cardInfoTitle}</CardInfoTitle>
                      <CardInfoName>{pro.cardInfoName}</CardInfoName>
                      <CardInfoDescribe>{pro.cardInfoDescribe}</CardInfoDescribe>
                    </CardInfoPro>
                    <CardContactPro>
                      <CardContactItem href="#"><CardContactImg src={pro.cardContactTwitter} /></CardContactItem>
                      <CardContactItem href="#"><CardContactImg src={pro.cardContactFB} /></CardContactItem>
                      <CardContactItem href="#"><CardContactImg src={pro.cardContactInsta} /></CardContactItem>
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