import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import OutsideClickHandler from 'react-outside-click-handler'
import { X } from '@styled-icons/feather'
import Columns, { NumberColumns } from 'components/Columns'
import { DataItemsMyWork } from 'components/ItemMyWork/data'
import PicturesCarousel from 'features/Carousel'
import { StyledH5, StyledH6 } from 'styled/StyledTitle/styled'
import { Paragraph } from 'styled/StyledParagraph/styled'
import { StyledA } from 'styled/StyledLink/styled'
import {
	ModalBox,
	Wrapper,
	FixedTitle,
	IconCross,
	DescriptionContent,
	Article,
	ArticleText,
} from './styled'

type Props = {
	hidden: boolean
	data: DataItemsMyWork
	shutDown: () => void
}

const DescriptionMyWork: React.FC<Props> = ({ hidden, shutDown, data }) => {
	const { t } = useTranslation()

	const [animate, setAnimate] = useState(false)

	useEffect(() => {
		setAnimate(true)
	}, [hidden])

	return (
		<Wrapper visible={hidden}>
			<OutsideClickHandler onOutsideClick={() => shutDown()}>
				<ModalBox animate={animate}>
					<FixedTitle>
						<StyledH5>{data?.myWorkItem?.subtitle}</StyledH5>
						<IconCross
							onClick={() => {
								setTimeout(shutDown, 500)
								setAnimate(false)
							}}
						>
							<X />
						</IconCross>
					</FixedTitle>
					<DescriptionContent>
						<PicturesCarousel data={data} />
						<StyledH6>
							{t('myWork.description.projectDescription')}
						</StyledH6>
						<Paragraph>{data?.description}</Paragraph>
						<Columns
							columns={NumberColumns.Columns2}
							columnsIpad={NumberColumns.Columns1}
						>
							<Article>
								<StyledH6>
									{t('myWork.description.createdProject')}
								</StyledH6>
								{data?.authors.map((item, index) => (
									<>
										<StyledA
											key={index}
											href={item.linkedIn}
										>
											{item.name}
										</StyledA>
										<ArticleText>
											{' '}
											{item.profession}
										</ArticleText>
									</>
								))}
							</Article>
							<Article>
								<StyledH6>
									{t('myWork.description.skills')}
								</StyledH6>
								<ArticleText>{data?.skills}</ArticleText>
							</Article>
							<Article>
								<StyledH6>
									{t('myWork.description.lastUpdate')}
								</StyledH6>
								<ArticleText>{data?.updateDate}</ArticleText>
							</Article>
						</Columns>
					</DescriptionContent>
				</ModalBox>
			</OutsideClickHandler>
		</Wrapper>
	)
}

export default DescriptionMyWork
