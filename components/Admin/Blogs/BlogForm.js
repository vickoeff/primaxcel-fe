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

const BlogForm = ({ onSubmitBlog, currentBlog = null }) => {
	const router = useRouter();
	const inputRef = useRef();
	const [blog, setBlog] = useState({
		image: '',
		title: '',
		description: '',
		isActive: '1',
		type: 'new_trend',
	});
	const [imagePreview, setImagePreview] = useState('');
	const [imageFile, setImageFile] = useState(null);
	const [error, setError] = useState({
		image: '',
		title: '',
		description: '',
	});

	useEffect(() => {
		if (!currentBlog) return;

		const { image, description, isActive, title, type, preview } = currentBlog;

		setBlog({
			...blog,
			image,
			description,
			isActive,
			title,
			type,
		});
		setImagePreview(preview);
	}, [currentBlog]);

	const onFormChange = (event) => {
		let value = event.target.value;
		const name = event.target.name;

		setBlog({
			...blog,
			[name]: value,
		});

		setError({
			...error,
			[name]: '',
		});
	};

	const onCancel = () => {
		router.push('/admin/blogs');
	};

	const onSubmitForm = (event) => {
		event.preventDefault();

		setError({
			image: blog.image ? '' : 'Please fill the required field',
			description: blog.description ? '' : 'Please fill the required field',
			title: blog.description ? '' : 'Please fill the required field',
		});

		if (!blog.image || !blog.description || !blog.title) return;

		onSubmitBlog({
			...blog,
			file: imageFile,
		});
	};

	const onFileChange = (event) => {
		const file = event.target.files[0];

		if (!file) {
			return;
		}

		setBlog({
			...blog,
			image: file.name,
		});

		setImageFile(file);
		setImagePreview(URL.createObjectURL(file));

		event.target.value = '';
	};

	const onDeleteImage = () => {
		setBlog({
			...blog,
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
					<Image src={imagePreview} alt="Blog image" objectFit="contain" />
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
					value={blog.image}
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
					value={blog.title}
					name="title"
					onChange={onFormChange}
				/>
				<FormErrorMessage mt={1}>{error.title}</FormErrorMessage>
			</FormControl>
			<FormControl mt={4}>
				<FormLabel fontWeight={600} fontSize="14px" mb="0">
					Status
				</FormLabel>
				<Select name="isActive" value={blog.isActive} onChange={onFormChange}>
					<option value={0}>Inactive</option>
					<option value={1}>Active</option>
				</Select>
			</FormControl>
			<FormControl mt={4}>
				<FormLabel fontWeight={600} fontSize="14px" mb="0">
					Type
				</FormLabel>
				<Select name="type" value={blog.type} onChange={onFormChange}>
					<option value="new_trend">New trend</option>
					<option value="beauty_tips">Beauty tips</option>
					<option value="maklon">Maklon</option>
					<option value="online_marketing">Online marketing</option>
					<option value="company_updates">Company updates</option>
				</Select>
			</FormControl>
			<FormControl isInvalid={error.description} mt={4}>
				<FormLabel fontWeight={600} fontSize="14px" mb="0">
					Description
				</FormLabel>
				<Textarea
					mt={1}
					value={blog.description}
					name="description"
					onChange={onFormChange}
				></Textarea>
				<FormErrorMessage mt={1}>{error.description}</FormErrorMessage>
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

export default BlogForm;
