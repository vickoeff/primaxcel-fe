import {
	Flex,
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Button,
	Icon,
	Text,
	Image,
	Textarea,
	Select,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

const ReviewForm = ({ onSubmitReview, currentReview = null }) => {
	const router = useRouter();
	const inputRef = useRef();
	const [review, setReview] = useState({
		image: '',
		description: '',
		isActive: '1',
		order: '',
	});
	const [imagePreview, setImagePreview] = useState('');
	const [imageFile, setImageFile] = useState(null);
	const [error, setError] = useState({
		image: '',
		description: '',
	});
	const [isEditPage, setIsEditPage] = useState(false);

	useEffect(() => {
		if (!currentReview) return;

		const { image, description, isActive, order, preview } = currentReview;

		setReview({
			...review,
			image,
			description,
			isActive,
			order,
		});
		setImagePreview(preview);
		setIsEditPage(true);
	}, [currentReview]);

	const onFormChange = (event) => {
		let value = event.target.value;
		const name = event.target.name;

		if (name === 'order') {
			value = value && value > 0 ? value : 1;
		}

		setReview({
			...review,
			[name]: value,
		});

		setError({
			...error,
			[name]: '',
		});
	};

	const onCancel = () => {
		router.push('/admin/reviews');
	};

	const onSubmitForm = (event) => {
		event.preventDefault();

		setError({
			image: review.image ? '' : 'Please fill the required field',
			description: review.description ? '' : 'Please fill the required field',
		});

		if (!review.image || !review.description) return;

		onSubmitReview({
			...review,
			file: imageFile,
		});
	};

	const onFileChange = (event) => {
		const file = event.target.files[0];

		if (!file) {
			return;
		}

		setReview({
			...review,
			image: file.name,
		});

		setImageFile(file);
		setImagePreview(URL.createObjectURL(file));

		event.target.value = '';
	};

	const onDeleteImage = () => {
		setReview({
			...review,
			image: '',
		});
		setImagePreview('');
		setImageFile(null);
	};

	return (
		<Flex
			as="form"
			py={4}
			px={6}
			width="480px"
			flexDirection="column"
			onSubmit={onSubmitForm}
		>
			<Flex
				as="div"
				width="100px"
				height="100px"
				borderRadius="4px"
				border="1px dashed"
				alignItems="center"
				justifyContent="center"
				borderColor="gray.400"
				bg="gray.100"
			>
				{imagePreview ? (
					<Image src={imagePreview} alt="Review image" objectFit="contain" />
				) : (
					<Text as="span" fontSize="12px" color="gray.600">
						No image
					</Text>
				)}
			</Flex>
			<FormControl isInvalid={error.image} mt={2}>
				<FormLabel fontWeight={600} fontSize="14px" mb="0">
					Image
				</FormLabel>
				<input
					type="file"
					accept="image/png, image/jpeg"
					name="file"
					ref={inputRef}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						display: 'none',
					}}
					onChange={onFileChange}
				></input>
				<Input
					mt={1}
					cursor="pointer"
					readOnly
					placeholder="Your image file"
					value={review.image}
					onClick={() => inputRef.current.click()}
				/>
				<Flex
					position="absolute"
					right="-32px"
					top="36px"
					cursor="pointer"
					onClick={onDeleteImage}
				>
					<Icon as={FaTrash}></Icon>
				</Flex>
				<FormErrorMessage mt={1}>{error.image}</FormErrorMessage>
			</FormControl>
			<FormControl isInvalid={error.description} mt={4}>
				<FormLabel fontWeight={600} fontSize="14px" mb="0">
					Description
				</FormLabel>
				<Textarea
					mt={1}
					value={review.description}
					name="description"
					onChange={onFormChange}
				></Textarea>
				<FormErrorMessage mt={1}>{error.description}</FormErrorMessage>
			</FormControl>
			<FormControl mt={4}>
				<FormLabel fontWeight={600} fontSize="14px" mb="0">
					Status
				</FormLabel>
				<Select name="isActive" value={review.isActive} onChange={onFormChange}>
					<option value={0}>Inactive</option>
					<option value={1}>Active</option>
				</Select>
			</FormControl>
			{isEditPage ? (
				<FormControl mt={4}>
					<FormLabel fontWeight={600} fontSize="14px" mb="0">
						Order
					</FormLabel>
					<Input
						type="number"
						mt={1}
						value={review.order}
						name="order"
						min="1"
						onChange={onFormChange}
					/>
				</FormControl>
			) : null}
			<Flex mt={5} alignSelf="flex-end">
				<Button
					padding="10px 20px !important"
					height="auto"
					mr={2}
					borderRadius="8px !important"
					alignSelf="flex-end"
					bg="none !important"
					_hover={{
						bg: 'none !important',
						color: 'gray.500',
					}}
					variant="link"
					onClick={onCancel}
				>
					Cancel
				</Button>
				<Button
					padding="10px 20px !important"
					height="auto"
					borderRadius="8px !important"
					display="flex"
					alignSelf="flex-end"
					bg="blue.500 !important"
					_hover={{
						bg: 'blue.600 !important',
						color: 'white',
					}}
					type="submit"
				>
					Save
				</Button>
			</Flex>
		</Flex>
	);
};

export default ReviewForm;
