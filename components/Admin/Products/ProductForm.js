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
	Select,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

const ProductForm = ({ onSubmitProduct, currentProduct = null }) => {
	const router = useRouter();
	const inputRef = useRef();
	const [product, setProduct] = useState({
		image: '',
		title: '',
		type: 'produce',
	});
	const [imagePreview, setImagePreview] = useState('');
	const [imageFile, setImageFile] = useState(null);
	const [error, setError] = useState({
		image: '',
		title: '',
	});

	useEffect(() => {
		if (!currentProduct) return;

		const { image, title, type, preview } = currentProduct;

		setProduct({
			...product,
			image,
			title,
			type,
		});
		setImagePreview(preview);
	}, [currentProduct]);

	const onFormChange = (event) => {
		let value = event.target.value;
		const name = event.target.name;

		setProduct({
			...product,
			[name]: value,
		});

		setError({
			...error,
			[name]: '',
		});
	};

	const onCancel = () => {
		router.push('/admin/products');
	};

	const onSubmitForm = (event) => {
		event.preventDefault();

		setError({
			image: product.image ? '' : 'Please fill the required field',
			title: product.title ? '' : 'Please fill the required field',
		});

		if (!product.image || !product.title) return;

		onSubmitProduct({
			...product,
			file: imageFile,
		});
	};

	const onFileChange = (event) => {
		const file = event.target.files[0];

		if (!file) {
			return;
		}

		setProduct({
			...product,
			image: file.name,
		});

		setImageFile(file);
		setImagePreview(URL.createObjectURL(file));

		event.target.value = '';
	};

	const onDeleteImage = () => {
		setProduct({
			...product,
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
					<Image src={imagePreview} alt="Product image" objectFit="contain" />
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
					value={product.image}
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
			<FormControl isInvalid={error.title} mt={4}>
				<FormLabel fontWeight={600} fontSize="14px" mb="0">
					Title
				</FormLabel>
				<Input
					type="text"
					mt={1}
					value={product.title}
					name="title"
					onChange={onFormChange}
				/>
				<FormErrorMessage mt={1}>{error.title}</FormErrorMessage>
			</FormControl>
			<FormControl mt={4}>
				<FormLabel fontWeight={600} fontSize="14px" mb="0">
					Type
				</FormLabel>
				<Select name="type" value={product.type} onChange={onFormChange}>
					<option value="produce">Produced</option>
					<option value="maklon">Maklon</option>
					<option value="household">Household</option>
					<option value="skincare">Skincare</option>
				</Select>
			</FormControl>
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

export default ProductForm;
