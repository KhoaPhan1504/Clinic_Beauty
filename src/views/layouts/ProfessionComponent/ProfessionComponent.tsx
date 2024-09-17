import React , {useEffect, useState, useRef} from 'react';
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

const ProfessionComponent:React.FC = () => {
  const [pros, setPros] = useState<ProProps[]>([]);

  const proItemRowRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    setPros(prosData);
  }, []);

  useEffect(() => {
    const proItemRows = proItemRowRef.current;

    proItemRows.forEach((item, index, arr) => {
      if(item) {
        item.addEventListener('mouseenter', () => {
          proItemRows.forEach((i) => {
            if(i) {
              i.classList.remove('Card');
              i.classList.add ('not-hovered');
              if(i != item) {
                i.style.backgroundColor = 'transparent';
              }
            }
          });
          item.classList.add('Card');
          item.classList.remove('not-hovered');
          item.style.backgroundColor = '#FF64AE';

          if (index === 0) {
            item.classList.add('ProfessionCardAfter');
          } else if (index === arr.length - 1) {
            item.classList.add('ProfessionCardBefore');
          }
        })
      }
    })
  })

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
						{pros.map((pro, index) => (
              <ProItemRow 
                key={pro.id}
                className= {
                  index === 0
                    ? 'ProfessionCardAfter'
                    : index === pros.length -1
                    ? 'ProfessionCardBefore'
                    : ''
                }
              >
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