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
	Divider,
	Select,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useState, useRef, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { BsXLg } from 'react-icons/bs';
import BlogEditor from './BlogEditor';

const BlogForm = ({
	onSubmitBlog,
	currentBlog = null,
	currentSections = [],
}) => {
	const router = useRouter();
	const inputRef = useRef();
	const [blog, setBlog] = useState({
		image: '',
		title: '',
		isActive: '0',
		type: 'new_trend',
	});
	const [imagePreview, setImagePreview] = useState('');
	const [imageFile, setImageFile] = useState(null);
	const [error, setError] = useState({
		image: '',
		title: '',
	});
	const [sections, setSections] = useState([
		{
			description: '',
			imagePosition: '',
			image: '',
			imageFile: null,
			error: '',
		},
	]);

	useEffect(() => {
		if (!currentBlog || !currentSections.length || !router.isReady) return;

		const { image, isActive, title, type, preview } = currentBlog;

		setBlog({
			...blog,
			image,
			isActive,
			title,
			type,
		});
		setImagePreview(preview);
		setSections([...currentSections]);
	}, [currentBlog, currentSections, router.isReady]);

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
			title: blog.title ? '' : 'Please fill the required field',
		});

		let errCount = 0;

		const updatedSections = sections.map((section) => {
			errCount = section.description ? errCount : errCount + 1;
			return {
				...section,
				error: section.description ? '' : 'Please fill the required field',
			};
		});

		setSections(updatedSections);

		if (!blog.image || !blog.title || errCount) return;

		onSubmitBlog({
			...blog,
			file: imageFile,
			sections,
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

	const addMoreSection = () => {
		setSections([
			...sections,
			{
				description: '',
				imagePosition: '',
				image: '',
				imageFile: null,
				error: '',
			},
		]);
	};

	const onSectionFileChange = (event, index) => {
		const file = event.target.files[0];

		if (!file) {
			return;
		}

		setSections(
			sections.map((section, sectionIndex) => {
				if (sectionIndex !== index) return section;

				return {
					...section,
					image: file.name,
					imageFile: file,
				};
			})
		);

		event.target.value = '';
	};

	const onOpenSectionImage = (index) => {
		const imageInput = document.getElementById(`section-image-${index}`);

		if (imageInput) imageInput.click();
	};

	const onDeleteSectionImage = (index) => {
		setSections(
			sections.map((section, sectionIndex) => {
				if (sectionIndex !== index) return section;

				return {
					...section,
					image: '',
					imageFile: null,
				};
			})
		);
	};

	const onSectionDescChange = (payload, index) => {
		setSections(
			sections.map((section, sectionIndex) => {
				if (sectionIndex !== index) return section;

				return {
					...section,
					description: payload,
					error: '',
				};
			})
		);
	};

	const onDeleteSection = (index) => {
		setSections(sections.filter((_, sectionIndex) => sectionIndex !== index));
	};

	return (
		<Flex
			as="form"
			py={4}
			px={6}
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
						alt="Blog image"
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
			<Flex width="480px" flexDirection="column">
				<FormControl isInvalid={error.image} mt={2}>
					<FormLabel fontWeight={600} fontSize="14px" mb="0">
						Thumbnail image (ratio 1:1)
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
					<Select
						name="isActive"
						value={blog.isActive}
						onChange={onFormChange}
						mt={1}
					>
						<option value={0}>Inactive</option>
						<option value={1}>Active</option>
					</Select>
				</FormControl>
				<FormControl mt={4}>
					<FormLabel fontWeight={600} fontSize="14px" mb="0">
						Type
					</FormLabel>
					<Select name="type" value={blog.type} onChange={onFormChange} mt={1}>
						<option value="new_trend">New trend</option>
						<option value="beauty_tips">Beauty tips</option>
						<option value="maklon">Maklon</option>
						<option value="online_marketing">Online marketing</option>
						<option value="company_updates">Company updates</option>
					</Select>
				</FormControl>
			</Flex>
			<Text as="h1" fontSize="xl" fontWeight={600} mt="4">
				Sections
			</Text>
			<Flex flexDirection="column" width="calc(100% - 48px)">
				{sections.map((section, index) => (
					<Flex
						key={`section-${index}`}
						flexDirection="column"
						position="relative"
					>
						{index ? (
							<Flex
								position="absolute"
								right="-32px"
								top="12px"
								cursor="pointer"
								onClick={() => onDeleteSection(index)}
							>
								<Icon as={BsXLg}></Icon>
							</Flex>
						) : null}
						<Flex mt="2" justifyContent="space-between">
							<FormControl width="calc(100% - 32px)">
								<FormLabel fontWeight={600} fontSize="14px" mb="0">
									Image
								</FormLabel>
								<input
									type="file"
									accept="image/png, image/jpeg"
									name="file"
									id={`section-image-${index}`}
									style={{
										position: 'absolute',
										width: '100%',
										height: '100%',
										display: 'none',
									}}
									onChange={(event) => onSectionFileChange(event, index)}
								></input>
								<Input
									mt={1}
									cursor="pointer"
									readOnly
									placeholder="Your image file"
									value={section.image}
									onClick={() => onOpenSectionImage(index)}
								/>
								<Flex
									position="absolute"
									right="-32px"
									top="36px"
									cursor="pointer"
									onClick={() => onDeleteSectionImage(index)}
								>
									<Icon as={FaTrash}></Icon>
								</Flex>
							</FormControl>
						</Flex>
						<FormControl isInvalid={!!section.error} mt={4}>
							<FormLabel fontWeight={600} fontSize="14px" mb={1}>
								Description
							</FormLabel>
							<BlogEditor
								index={index}
								description={section.description}
								onSectionDescChange={onSectionDescChange}
							></BlogEditor>
							<FormErrorMessage mt={1}>{section.error}</FormErrorMessage>
						</FormControl>
						<Divider borderColor="gray.300" my="5"></Divider>
					</Flex>
				))}
				<Button
					padding="10px 20px !important"
					height="auto"
					borderRadius="8px !important"
					display="flex"
					bg="green.500 !important"
					_hover={{
						bg: 'green.600 !important',
						color: 'white',
					}}
					onClick={addMoreSection}
				>
					Add more section
				</Button>
			</Flex>
			<Flex mt={5} width="calc(100% - 48px)" justifyContent="flex-end">
				<Flex>
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
		</Flex>
	);
};

export default BlogForm;
