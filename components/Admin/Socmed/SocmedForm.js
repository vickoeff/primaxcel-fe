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
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

const SocmedForm = ({ onSubmitSocmed, currentSocmed = null }) => {
	const router = useRouter();
	const inputRef = useRef();
	const [socmed, setSocmed] = useState({
		image: '',
		name: '',
		url: '',
		alt: '',
		order: '',
	});
	const [imagePreview, setImagePreview] = useState('');
	const [imageFile, setImageFile] = useState(null);
	const [error, setError] = useState({
		image: '',
		name: '',
		url: '',
	});
	const [isEditPage, setIsEditPage] = useState(false);

	useEffect(() => {
		if (!currentSocmed) return;

		const { image, name, url, alt, order, preview } = currentSocmed;

		setSocmed({
			...socmed,
			image,
			name,
			url,
			alt,
			order,
		});
		setImagePreview(preview);
		setIsEditPage(true);
	}, [currentSocmed]);

	const onFormChange = (event) => {
		let value = event.target.value;
		const name = event.target.name;

		if (name === 'order') {
			value = value && value > 0 ? value : 1;
		}

		setSocmed({
			...socmed,
			[name]: value,
		});

		setError({
			...error,
			[name]: '',
		});
	};

	const onCancel = () => {
		router.push('/admin/socmed');
	};

	const onSubmitForm = (event) => {
		event.preventDefault();

		setError({
			image: socmed.image ? '' : 'Please fill the required field',
			name: socmed.name ? '' : 'Please fill the required field',
			url: socmed.url ? '' : 'Please fill the required field',
		});

		if (!socmed.image || !socmed.name || !socmed.url) return;

		onSubmitSocmed({
			...socmed,
			file: imageFile,
		});
	};

	const onFileChange = (event) => {
		const file = event.target.files[0];

		if (!file) {
			return;
		}

		setSocmed({
			...socmed,
			image: file.name,
		});

		setImageFile(file);
		setImagePreview(URL.createObjectURL(file));

		event.target.value = '';
	};

	const onDeleteImage = () => {
		setSocmed({
			...socmed,
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
					<Image
						src={imagePreview}
						alt={socmed.alt}
						objectFit="contain"
						w="100%"
						h="100%"
					/>
				) : (
					<Text as="span" fontSize="12px" color="gray.600">
						No image
					</Text>
				)}
			</Flex>
			<FormControl isInvalid={error.image} mt={2}>
				<FormLabel fontWeight={600} fontSize="14px" mb="0">
					Image (ratio 1:1)
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
					value={socmed.image}
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
			<FormControl isInvalid={error.name} mt={4}>
				<FormLabel fontWeight={600} fontSize="14px" mb="0">
					Name
				</FormLabel>
				<Input
					type="text"
					mt={1}
					value={socmed.name}
					name="name"
					onChange={onFormChange}
				/>
				<FormErrorMessage mt={1}>{error.name}</FormErrorMessage>
			</FormControl>
			<FormControl isInvalid={error.url} mt={4}>
				<FormLabel fontWeight={600} fontSize="14px" mb="0">
					Url
				</FormLabel>
				<Input
					type="text"
					mt={1}
					value={socmed.url}
					name="url"
					onChange={onFormChange}
				/>
				<FormErrorMessage mt={1}>{error.url}</FormErrorMessage>
			</FormControl>
			<FormControl mt={4}>
				<FormLabel fontWeight={600} fontSize="14px" mb="0">
					Alt
				</FormLabel>
				<Input
					type="text"
					mt={1}
					value={socmed.alt}
					name="alt"
					onChange={onFormChange}
				/>
			</FormControl>
			{isEditPage ? (
				<FormControl mt={4}>
					<FormLabel fontWeight={600} fontSize="14px" mb="0">
						Order
					</FormLabel>
					<Input
						type="number"
						mt={1}
						value={socmed.order}
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

export default SocmedForm;
