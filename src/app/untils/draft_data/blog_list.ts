import { IBlogItem } from "../../types/blog";

const htmlString = `
<div>
    <p>This is a <span>paragraph</span> inside a div.</p>
    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
    </div>
    <p>Yet another <span>paragraph</span> with a <span>span</span> inside.</p>
</div>
<div>
    <p>Second div with a <span>paragraph</span> and a <span>span</span>.</p>
    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <span>paragraph</span> and a <span>span</span>.</p>
    </div>
</div>
`;


export const BlogItems: IBlogItem[] = [
    {
        id: "1",
        title: "First Blog Post",
        summary: "This is the summary of the first blog post.",
        image: "./assets/image1.jpg",
        comment: [
            {
                id: "c1",
                name: "John Doe",
                content: "Great post!",
                time: new Date(),
                avatar: "./assets/avatar1.jpg",
                level: 1
            }
        ],
        author: "Alice",
        time: new Date(),
        categories: '1',
        content: htmlString
    },
    {
        id: "2",
        title: "Second Blog Post",
        summary: "This is the summary of the second blog post.",
        image: "./assets/image2.jpg",
        comment: [
            {
                id: "c2_1",
                name: "Jane Smith",
                content: "Very informative.",
                time: new Date(),
                avatar: "./assets/avatar2.jpg",
                level: 1
            },
            {
                id: "c2",
                name: "Jane Smith",
                content: "Very informative.",
                time: new Date(),
                avatar: "./assets/avatar2.jpg",
                level: 2
            }
        ],
        author: "Bob",
        time: new Date(),
        categories: '1',
        content: htmlString
    },
    {
        id: "3",
        title: "Third Blog Post",
        summary: "This is the summary of the third blog post.",
        image: "./assets/image3.jpg",
        comment: [
            {
                id: "c3",
                name: "Alice Johnson",
                content: "Thanks for sharing!",
                time: new Date(),
                avatar: "./assets/avatar3.jpg",
                level: 1
            }
        ],
        author: "Charlie",
        time: new Date(),
        categories: '2',
        content: htmlString
    },
    {
        id: "4",
        title: "Fourth Blog Post",
        summary: "This is the summary of the fourth blog post.",
        image: "./assets/image4.jpg",
        comment: [
            {
                id: "c4_1",
                name: "Hank Irving",
                content: "Excellent post!",
                time: new Date(),
                avatar: "./assets/avatar10.jpg",
                level: 1
            },
            {
                id: "c4_2",
                name: "Hank Irving",
                content: "Excellent post!",
                time: new Date(),
                avatar: "./assets/avatar10.jpg",
                level: 2
            },
            {
                id: "c4",
                name: "Bob Brown",
                content: "Interesting read.",
                time: new Date(),
                avatar: "./assets/avatar4.jpg",
                level: 3
            }
        ],
        author: "David",
        time: new Date(),
        categories: '3',
        content: htmlString
    },
    {
        id: "5",
        title: "Fifth Blog Post",
        summary: "This is the summary of the fifth blog post.",
        image: "./assets/image5.jpg",
        comment: [
            {
                id: "c5_1",
                name: "Hank Irving",
                content: "Excellent post!",
                time: new Date(),
                avatar: "./assets/avatar10.jpg",
                level: 1
            },
            {
                id: "c5",
                name: "Charlie Davis",
                content: "Loved it!",
                time: new Date(),
                avatar: "./assets/avatar5.jpg",
                level: 2
            }
        ],
        author: "Eve",
        time: new Date(),
        categories: '4',
        content: htmlString
    },
    {
        id: "6",
        title: "Sixth Blog Post",
        summary: "This is the summary of the sixth blog post.",
        image: "./assets/image6.jpg",
        comment: [
            {
                id: "c6",
                name: "David Evans",
                content: "Very helpful.",
                time: new Date(),
                avatar: "./assets/avatar6.jpg",
                level: 1
            }
        ],
        author: "Frank",
        time: new Date(),
        categories: '6',
        content: htmlString
    },
    {
        id: "7",
        title: "Seventh Blog Post",
        summary: "This is the summary of the seventh blog post.",
        image: "./assets/image7.jpg",
        comment: [
            {
                id: "c7_1",
                name: "Hank Irving",
                content: "Excellent post!",
                time: new Date(),
                avatar: "./assets/avatar10.jpg",
                level: 1
            },
            {
                id: "c7_2",
                name: "Hank Irving",
                content: "Excellent post!",
                time: new Date(),
                avatar: "./assets/avatar10.jpg",
                level: 2
            },
            {
                id: "c7",
                name: "Eve Foster",
                content: "Great insights.",
                time: new Date(),
                avatar: "./assets/avatar7.jpg",
                level: 3
            }
        ],
        author: "Grace",
        time: new Date(),
        categories: '5',
        content: htmlString
    },
    {
        id: "8",
        title: "Eighth Blog Post",
        summary: "This is the summary of the eighth blog post.",
        image: "./assets/image8.jpg",
        comment: [
            {
                id: "c8_1",
                name: "Frank Green",
                content: "Well written.",
                time: new Date(),
                avatar: "./assets/avatar8.jpg",
                level: 1
            },
            {
                id: "c8_2",
                name: "Frank Green",
                content: "Well written.",
                time: new Date(),
                avatar: "./assets/avatar8.jpg",
                level: 2
            }
        ],
        author: "Hank",
        time: new Date(),
        categories: '8',
        content: htmlString
    },
    {
        id: "9",
        title: "Ninth Blog Post",
        summary: "This is the summary of the ninth blog post.",
        image: "./assets/image9.jpg",
        comment: [
            {
                id: "c9",
                name: "Grace Hill",
                content: "Very detailed.",
                time: new Date(),
                avatar: "./assets/avatar9.jpg",
                level: 1
            }
        ],
        author: "Ivy",
        time: new Date(),
        categories: '7',
        content: htmlString
    },
    {
        id: "10",
        title: "Tenth Blog Post",
        summary: "This is the summary of the tenth blog post.",
        image: "./assets/image10.jpg",
        comment: [
            {
                id: "c10_1",
                name: "Hank Irving",
                content: "Excellent post!",
                time: new Date(),
                avatar: "./assets/avatar10.jpg",
                level: 1
            },
            {
                id: "c10_2",
                name: "Hank Irving",
                content: "Excellent post!",
                time: new Date(),
                avatar: "./assets/avatar10.jpg",
                level: 2
            },
            {
                id: "c10_3",
                name: "Hank Irving",
                content: "Excellent post!",
                time: new Date(),
                avatar: "./assets/avatar10.jpg",
                level: 3
            }
        ],
        author: "Jack",
        time: new Date(),
        categories: '4',
        content: htmlString
    },
    {
        id: "11",
        title: "eleventh Blog Post",
        summary: "This is the summary of the third blog post.",
        image: "./assets/image3.jpg",
        comment: [
            {
                id: "c3",
                name: "Alice Johnson",
                content: "Thanks for sharing!",
                time: new Date(),
                avatar: "./assets/avatar3.jpg",
                level: 1
            }
        ],
        author: "Charlie",
        time: new Date(),
        categories: '2',
        content: htmlString
    },
    {
        id: "12",
        title: "twelfth Blog Post",
        summary: "This is the summary of the fourth blog post.",
        image: "./assets/image4.jpg",
        comment: [
            {
                id: "c4_1",
                name: "Hank Irving",
                content: "Excellent post!",
                time: new Date(),
                avatar: "./assets/avatar10.jpg",
                level: 1
            },
            {
                id: "c4_2",
                name: "Hank Irving",
                content: "Excellent post!",
                time: new Date(),
                avatar: "./assets/avatar10.jpg",
                level: 2
            },
            {
                id: "c4",
                name: "Bob Brown",
                content: "Interesting read.",
                time: new Date(),
                avatar: "./assets/avatar4.jpg",
                level: 3
            }
        ],
        author: "David",
        time: new Date(),
        categories: '3',
        content: htmlString
    },
];

