import React from "react"

interface BaseIconProps {
	width?: string
	height?: string
	fill?: string
	border?: string
}

export const icons = {
	LearnAnythinglogo: () => (
		<svg width="35" height="35" viewBox="0 0 30 30" fill="none">
			<g clipPath="url(#clip0_7502_1806)">
				<g opacity="0.7">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M21.0784 28.966C22.2824 28.4786 23.4001 27.8248 24.4023 27.0309C23.3266 27.824 22.8358 28.1863 21.4672 28.855C21.1737 28.9845 20.7834 29.1589 20.4862 29.2776C20.7374 29.1817 20.9384 29.0775 21.0784 28.966ZM21.0784 28.966C21.9873 28.2464 20.0201 27.5006 16.6827 27.3016C13.3458 27.1024 9.90278 27.5248 8.99303 28.2455C8.53799 28.6055 8.80403 28.9727 9.60135 29.2735C8.65457 28.8758 8.5333 28.8244 7.8472 28.4597C6.75696 27.8168 6.58962 27.7185 5.73927 27.0742L4.92993 26.3942C4.52809 26.0366 4.52726 25.6534 5.00506 25.274C6.5144 24.0787 12.2291 23.3778 17.7679 23.708C23.2115 24.0331 26.4595 25.2334 25.1377 26.4094L24.4023 27.0309C23.4001 27.8248 22.2824 28.4786 21.0784 28.966ZM28.3512 22.3353C29.1155 20.9354 25.0453 19.584 18.5582 19.1967C11.4141 18.7709 4.0449 19.6752 2.09828 21.2168C1.63169 21.5863 1.51866 21.9584 1.71466 22.3174L1.24738 21.3808C0.661456 19.9547 0.637998 19.8993 0.411012 19.0759C0.290928 18.5604 0.132822 17.8708 0.0436785 17.3489C-0.00522774 17.0334 0.161581 16.7104 0.566459 16.3893C2.74386 14.6655 10.9842 13.6538 18.9722 14.1302C25.8065 14.5389 30.2415 15.9033 30.0181 17.3685C29.9229 17.8609 29.799 18.5172 29.6776 19.0027C29.2111 20.51 29.2018 20.5387 28.8566 21.3131L28.3512 22.3353ZM29.8832 11.9702C29.6058 10.6126 25.3295 9.38692 18.9372 9.00544C11.0164 8.53218 2.84438 9.53532 0.686174 11.2447C0.388347 11.4802 0.22062 11.7166 0.173528 11.951C0.310001 11.3893 0.502756 10.6417 0.675563 10.0903C1.23679 8.62642 1.24754 8.59884 1.64202 7.8504L2.07443 7.08959C2.15058 6.96518 2.26721 6.83897 2.42498 6.71374C4.32178 5.21178 11.5008 4.33054 18.4599 4.74618C23.6915 5.05808 27.3098 6.0137 27.9778 7.10736L28.4113 7.86864C29.076 9.24824 29.102 9.30198 29.3797 10.1094C29.5436 10.6635 29.7539 11.4062 29.8832 11.9702ZM24.5623 3.1821C23.6812 2.47343 21.1317 1.88047 17.6199 1.66987C12.3597 1.35668 6.93276 2.02235 5.49908 3.15763C5.49209 3.16281 5.48681 3.16755 5.48041 3.17257L5.65732 3.03037C6.60122 2.33439 7.22384 1.87498 8.5921 1.20633C9.52394 0.795491 9.62105 0.752916 10.3408 0.509223C11.6398 0.0845342 14.0986 -0.130655 16.4976 0.0123293C17.8074 0.0906479 18.8815 0.262207 19.6062 0.485844C20.3846 0.756101 20.569 0.819981 21.3403 1.16385C22.38 1.68628 22.5964 1.79488 23.5716 2.43791C23.8701 2.65971 24.2735 2.94884 24.5623 3.1821Z"
						fill="white"
						fillOpacity="0.5"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M21.0784 28.966C22.2824 28.4786 23.4001 27.8248 24.4023 27.0309C23.3266 27.824 22.8358 28.1863 21.4672 28.855C21.1737 28.9845 20.7834 29.1589 20.4862 29.2776C20.7374 29.1817 20.9384 29.0775 21.0784 28.966ZM21.0784 28.966C21.9873 28.2464 20.0201 27.5006 16.6827 27.3016C13.3458 27.1024 9.90278 27.5248 8.99303 28.2455C8.53799 28.6055 8.80403 28.9727 9.60135 29.2735C8.65457 28.8758 8.5333 28.8244 7.8472 28.4597C6.75696 27.8168 6.58962 27.7185 5.73927 27.0742L4.92993 26.3942C4.52809 26.0366 4.52726 25.6534 5.00506 25.274C6.5144 24.0787 12.2291 23.3778 17.7679 23.708C23.2115 24.0331 26.4595 25.2334 25.1377 26.4094L24.4023 27.0309C23.4001 27.8248 22.2824 28.4786 21.0784 28.966ZM28.3512 22.3353C29.1155 20.9354 25.0453 19.584 18.5582 19.1967C11.4141 18.7709 4.0449 19.6752 2.09828 21.2168C1.63169 21.5863 1.51866 21.9584 1.71466 22.3174L1.24738 21.3808C0.661456 19.9547 0.637998 19.8993 0.411012 19.0759C0.290928 18.5604 0.132822 17.8708 0.0436785 17.3489C-0.00522774 17.0334 0.161581 16.7104 0.566459 16.3893C2.74386 14.6655 10.9842 13.6538 18.9722 14.1302C25.8065 14.5389 30.2415 15.9033 30.0181 17.3685C29.9229 17.8609 29.799 18.5172 29.6776 19.0027C29.2111 20.51 29.2018 20.5387 28.8566 21.3131L28.3512 22.3353ZM29.8832 11.9702C29.6058 10.6126 25.3295 9.38692 18.9372 9.00544C11.0164 8.53218 2.84438 9.53532 0.686174 11.2447C0.388347 11.4802 0.22062 11.7166 0.173528 11.951C0.310001 11.3893 0.502756 10.6417 0.675563 10.0903C1.23679 8.62642 1.24754 8.59884 1.64202 7.8504L2.07443 7.08959C2.15058 6.96518 2.26721 6.83897 2.42498 6.71374C4.32178 5.21178 11.5008 4.33054 18.4599 4.74618C23.6915 5.05808 27.3098 6.0137 27.9778 7.10736L28.4113 7.86864C29.076 9.24824 29.102 9.30198 29.3797 10.1094C29.5436 10.6635 29.7539 11.4062 29.8832 11.9702ZM24.5623 3.1821C23.6812 2.47343 21.1317 1.88047 17.6199 1.66987C12.3597 1.35668 6.93276 2.02235 5.49908 3.15763C5.49209 3.16281 5.48681 3.16755 5.48041 3.17257L5.65732 3.03037C6.60122 2.33439 7.22384 1.87498 8.5921 1.20633C9.52394 0.795491 9.62105 0.752916 10.3408 0.509223C11.6398 0.0845342 14.0986 -0.130655 16.4976 0.0123293C17.8074 0.0906479 18.8815 0.262207 19.6062 0.485844C20.3846 0.756101 20.569 0.819981 21.3403 1.16385C22.38 1.68628 22.5964 1.79488 23.5716 2.43791C23.8701 2.65971 24.2735 2.94884 24.5623 3.1821Z"
						fill="#2358E0"
						fillOpacity="0.23"
					/>
				</g>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M27.9987 7.21638L27.9694 7.16485C27.9799 7.18199 27.9897 7.19915 27.9987 7.21638ZM2.03707 7.19796C1.32209 8.55782 5.28261 9.86753 11.5833 10.243C18.5427 10.6589 25.7223 9.7775 27.6181 8.27546C28.0664 7.91991 28.1802 7.56156 27.9987 7.21638L28.4028 7.92612C28.7627 8.58433 28.844 8.79507 29.3713 10.1669C29.5443 10.7186 29.737 11.4658 29.8748 12.0277C29.9414 12.3524 29.779 12.6843 29.3622 13.0144C27.2039 14.7239 19.032 15.7269 11.1114 15.254C4.27975 14.8461 -0.133951 13.4745 0.165092 12.0085C0.292434 11.4448 0.502892 10.7026 0.667127 10.1478C0.942429 9.34203 0.955541 9.31502 1.63358 7.90789L2.03707 7.19796ZM2.03707 7.19796C2.04614 7.18077 2.0557 7.16395 2.066 7.14708L2.03707 7.19796ZM0.045561 17.4609C0.361533 18.8224 4.66336 20.0491 11.0801 20.4323C19.0685 20.9088 27.3093 19.8977 29.4861 18.1735C29.7914 17.932 29.9613 17.6896 30.0058 17.4492C29.9224 17.9404 29.7763 18.5793 29.6692 19.0601C29.495 19.766 29.3836 20.0424 28.8482 21.3706L28.3427 22.3928C28.2652 22.5344 28.1382 22.6762 27.9592 22.8181C26.0121 24.3604 18.6437 25.2641 11.4993 24.8381C6.06715 24.5138 2.32874 23.5136 1.70622 22.3749L1.23894 21.4383C0.887668 20.6653 0.878487 20.6365 0.402577 19.1333C0.276244 18.6383 0.144853 17.9746 0.045561 17.4609ZM0.045561 17.4609C0.0414181 17.4428 0.0379656 17.4246 0.0352439 17.4064C0.0385814 17.4245 0.0422712 17.4423 0.045561 17.4609ZM30.0058 17.4492C30.0071 17.4415 30.0084 17.4337 30.0097 17.426C30.0085 17.4337 30.0072 17.4415 30.0058 17.4492ZM4.99103 26.51C4.96674 26.4905 4.94348 26.4712 4.92149 26.4517L4.99103 26.51ZM4.99103 26.51C5.925 27.2536 8.60587 27.8751 12.2925 28.0956C17.8319 28.4256 23.5463 27.7251 25.0556 26.5286C25.0583 26.5265 25.061 26.5244 25.0636 26.5223L24.3938 27.0884C23.2187 28.0069 22.4421 28.4062 21.4587 28.9124C21.1678 29.0473 20.7729 29.2108 20.4778 29.3351C19.1007 29.8594 16.2024 30.1364 13.3806 29.9677C11.7136 29.8677 10.3882 29.632 9.59291 29.331C8.87794 29.0455 8.79946 29.0057 7.83876 28.5171C6.91988 27.9982 6.7843 27.8992 5.73083 27.1317L4.99103 26.51ZM25.0636 26.5223L25.1293 26.4669C25.109 26.4851 25.0867 26.5043 25.0636 26.5223ZM24.5539 3.23958C24.9932 3.59312 25.018 3.97504 24.5411 4.35241C23.1081 5.48738 17.6806 6.15388 12.4195 5.83999C7.18209 5.5271 4.08325 4.3611 5.47197 3.23005L5.64889 3.08786C6.87177 2.14553 7.51627 1.81302 8.58366 1.26382C9.22483 0.968483 9.40031 0.900301 10.1065 0.647417C9.89518 0.730196 9.72456 0.819108 9.605 0.915035C8.79062 1.55997 10.5522 2.22662 13.54 2.40516C16.5276 2.58319 19.6101 2.20556 20.4252 1.56034C20.8352 1.23533 20.589 0.904881 19.8634 0.633557C20.4348 0.830615 20.6321 0.916665 21.3318 1.22133C22.2102 1.62645 22.7484 1.97233 23.5631 2.49539C23.8679 2.70793 24.2581 3.01474 24.5539 3.23958Z"
					fill="white"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M27.9987 7.21638L27.9694 7.16485C27.9799 7.18199 27.9897 7.19915 27.9987 7.21638ZM2.03707 7.19796C1.32209 8.55782 5.28261 9.86753 11.5833 10.243C18.5427 10.6589 25.7223 9.7775 27.6181 8.27546C28.0664 7.91991 28.1802 7.56156 27.9987 7.21638L28.4028 7.92612C28.7627 8.58433 28.844 8.79507 29.3713 10.1669C29.5443 10.7186 29.737 11.4658 29.8748 12.0277C29.9414 12.3524 29.779 12.6843 29.3622 13.0144C27.2039 14.7239 19.032 15.7269 11.1114 15.254C4.27975 14.8461 -0.133951 13.4745 0.165092 12.0085C0.292434 11.4448 0.502892 10.7026 0.667127 10.1478C0.942429 9.34203 0.955541 9.31502 1.63358 7.90789L2.03707 7.19796ZM2.03707 7.19796C2.04614 7.18077 2.0557 7.16395 2.066 7.14708L2.03707 7.19796ZM0.045561 17.4609C0.361533 18.8224 4.66336 20.0491 11.0801 20.4323C19.0685 20.9088 27.3093 19.8977 29.4861 18.1735C29.7914 17.932 29.9613 17.6896 30.0058 17.4492C29.9224 17.9404 29.7763 18.5793 29.6692 19.0601C29.495 19.766 29.3836 20.0424 28.8482 21.3706L28.3427 22.3928C28.2652 22.5344 28.1382 22.6762 27.9592 22.8181C26.0121 24.3604 18.6437 25.2641 11.4993 24.8381C6.06715 24.5138 2.32874 23.5136 1.70622 22.3749L1.23894 21.4383C0.887668 20.6653 0.878487 20.6365 0.402577 19.1333C0.276244 18.6383 0.144853 17.9746 0.045561 17.4609ZM0.045561 17.4609C0.0414181 17.4428 0.0379656 17.4246 0.0352439 17.4064C0.0385814 17.4245 0.0422712 17.4423 0.045561 17.4609ZM30.0058 17.4492C30.0071 17.4415 30.0084 17.4337 30.0097 17.426C30.0085 17.4337 30.0072 17.4415 30.0058 17.4492ZM4.99103 26.51C4.96674 26.4905 4.94348 26.4712 4.92149 26.4517L4.99103 26.51ZM4.99103 26.51C5.925 27.2536 8.60587 27.8751 12.2925 28.0956C17.8319 28.4256 23.5463 27.7251 25.0556 26.5286C25.0583 26.5265 25.061 26.5244 25.0636 26.5223L24.3938 27.0884C23.2187 28.0069 22.4421 28.4062 21.4587 28.9124C21.1678 29.0473 20.7729 29.2108 20.4778 29.3351C19.1007 29.8594 16.2024 30.1364 13.3806 29.9677C11.7136 29.8677 10.3882 29.632 9.59291 29.331C8.87794 29.0455 8.79946 29.0057 7.83876 28.5171C6.91988 27.9982 6.7843 27.8992 5.73083 27.1317L4.99103 26.51ZM25.0636 26.5223L25.1293 26.4669C25.109 26.4851 25.0867 26.5043 25.0636 26.5223ZM24.5539 3.23958C24.9932 3.59312 25.018 3.97504 24.5411 4.35241C23.1081 5.48738 17.6806 6.15388 12.4195 5.83999C7.18209 5.5271 4.08325 4.3611 5.47197 3.23005L5.64889 3.08786C6.87177 2.14553 7.51627 1.81302 8.58366 1.26382C9.22483 0.968483 9.40031 0.900301 10.1065 0.647417C9.89518 0.730196 9.72456 0.819108 9.605 0.915035C8.79062 1.55997 10.5522 2.22662 13.54 2.40516C16.5276 2.58319 19.6101 2.20556 20.4252 1.56034C20.8352 1.23533 20.589 0.904881 19.8634 0.633557C20.4348 0.830615 20.6321 0.916665 21.3318 1.22133C22.2102 1.62645 22.7484 1.97233 23.5631 2.49539C23.8679 2.70793 24.2581 3.01474 24.5539 3.23958Z"
					fill="url(#paint0_linear_7502_1806)"
					fillOpacity="0.32"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_7502_1806"
					x1="23.9069"
					y1="2.74376"
					x2="5.97898"
					y2="27.3127"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" stopOpacity="0" />
					<stop offset="1" stopColor="#2358E0" />
				</linearGradient>
				<clipPath id="clip0_7502_1806">
					<rect width="30" height="30" fill="white" />
				</clipPath>
			</defs>
		</svg>
	),
	Link: () => (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="ui-52 1" opacity="0.1">
				<g id="The-Icons">
					<path
						id="Combined-Shape"
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.6597 7.18364C12.9851 7.50908 12.9843 8.03753 12.6624 8.35944L7.94293 13.0789C7.61899 13.4028 7.09484 13.4039 6.76713 13.0762C6.4417 12.7508 6.44252 12.2223 6.76442 11.9004L11.4839 7.18093C11.8078 6.85699 12.332 6.85593 12.6597 7.18364ZM6.76715 16.6117C5.79184 17.587 4.20628 17.5864 3.2316 16.6117C2.2561 15.6362 2.2566 14.0512 3.23161 13.0762L5.58862 10.7192C5.91406 10.3937 5.91406 9.8661 5.58862 9.54066C5.26319 9.21522 4.73555 9.21522 4.41011 9.54066L2.0531 11.8977C0.427374 13.5234 0.426552 16.1637 2.05309 17.7902C3.67844 19.4156 6.31928 19.4166 7.94566 17.7902L10.3027 15.4332C10.6281 15.1078 10.6281 14.5801 10.3027 14.2547C9.97723 13.9293 9.44959 13.9293 9.12416 14.2547L6.76715 16.6117ZM17.3737 8.36216C19.0001 6.73578 18.9991 4.09494 17.3737 2.46959C15.7472 0.843055 13.1069 0.843878 11.4812 2.46961L9.12416 4.82662C8.79872 5.15205 8.79872 5.67969 9.12416 6.00513C9.44959 6.33056 9.97723 6.33056 10.3027 6.00513L12.6597 3.64812C13.6347 2.6731 15.2197 2.6726 16.1952 3.6481C17.1699 4.62278 17.1705 6.20835 16.1952 7.18365L13.8382 9.54066C13.5128 9.8661 13.5128 10.3937 13.8382 10.7192C14.1636 11.0446 14.6913 11.0446 15.0167 10.7192L17.3737 8.36216Z"
						fill="white"
					/>
				</g>
			</g>
		</svg>
	),
	Filter: (props) => (
		<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
			<path
				stroke={props.border ? props.border : "currentColor"}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M19.25 4.75H4.75L9.31174 10.4522C9.59544 10.8068 9.75 11.2474 9.75 11.7016V18.25C9.75 18.8023 10.1977 19.25 10.75 19.25H13.25C13.8023 19.25 14.25 18.8023 14.25 18.25V11.7016C14.25 11.2474 14.4046 10.8068 14.6883 10.4522L19.25 4.75Z"
			></path>
		</svg>
	),
	Hourglass: (props) => (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5.75 4.75H18.25M6.75 4.75H17.25V6C17.25 8.89949 14.8995 11.25 12 11.25C9.10051 11.25 6.75 8.8995 6.75 6V4.75Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
			<path
				d="M9 10H15"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
			<path
				d="M5.75 19.25H18.25M6.75 19.25H17.25V17.5C17.25 14.6005 14.8995 12.25 12 12.25C9.10051 12.25 6.75 14.6005 6.75 17.5V19.25Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
		</svg>
	),
	Bookmark: (props) => (
		<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
			></path>
		</svg>
	),
	Trash: (props) => (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5.75 7.75L6.59115 17.4233C6.68102 18.4568 7.54622 19.25 8.58363 19.25H14.4164C15.4538 19.25 16.319 18.4568 16.4088 17.4233L17.25 7.75H5.75Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
			<path
				d="M9.75 10.75V16.25"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
			<path
				d="M13.25 10.75V16.25"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
			<path
				d="M8.75 7.75V6.75C8.75 5.64543 9.64543 4.75 10.75 4.75H12.25C13.3546 4.75 14.25 5.64543 14.25 6.75V7.75"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
			<path
				d="M4.75 7.75H18.25"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
		</svg>
	),
	Verified: (props) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="m9.75 12.75 1.5 1.5c.75-2.75 3-4.5 3-4.5m-4.713 8.197c-.986.143-1.967-.124-2.664-.82-.696-.697-.963-1.678-.82-2.664C5.255 13.867 4.75 12.985 4.75 12c0-.985.505-1.867 1.303-2.463-.142-.986.124-1.967.82-2.663.697-.697 1.678-.963 2.664-.82.596-.799 1.478-1.304 2.463-1.304.985 0 1.867.505 2.463 1.304.986-.143 1.967.123 2.664.82.696.696.963 1.677.82 2.663.798.596 1.303 1.478 1.303 2.463 0 .985-.505 1.867-1.303 2.463.143.986-.124 1.967-.82 2.664-.697.696-1.678.963-2.664.82-.596.798-1.478 1.303-2.463 1.303-.985 0-1.867-.505-2.463-1.303Z"
			></path>
		</svg>
	),
	Home: (props) => (
		<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z"
			></path>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z"
			></path>
		</svg>
	),
	X: (props) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 30 30"
			width="21px"
			height="21px"
		>
			<path
				fill="currentColor"
				d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"
			/>
		</svg>
	),
	Menu: (props) => (
		<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M4.75 5.75H19.25"
			></path>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M4.75 18.25H19.25"
			></path>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M4.75 12H19.25"
			></path>
		</svg>
	),
	Sparkles: (props) => (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17 4.75C17 5.89705 15.8971 7 14.75 7C15.8971 7 17 8.10295 17 9.25C17 8.10295 18.1029 7 19.25 7C18.1029 7 17 5.89705 17 4.75Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
			<path
				d="M17 14.75C17 15.8971 15.8971 17 14.75 17C15.8971 17 17 18.1029 17 19.25C17 18.1029 18.1029 17 19.25 17C18.1029 17 17 15.8971 17 14.75Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
			<path
				d="M9 7.75C9 9.91666 6.91666 12 4.75 12C6.91666 12 9 14.0833 9 16.25C9 14.0833 11.0833 12 13.25 12C11.0833 12 9 9.91666 9 7.75Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
		</svg>
	),
	Heart: (props) => (
		<svg
			width={props.width ? props.width : "24"}
			height={props.height ? props.height : "24"}
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				fillRule="evenodd"
				fill={props.fill}
				stroke={props.border}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
				clipRule="evenodd"
			></path>
		</svg>
	),
	Options: (props) => (
		<svg width="30" height="30" fill="none" viewBox="0 0 24 24">
			<path
				fill="currentColor"
				d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
			></path>
			<path
				fill="currentColor"
				d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"
			></path>
			<path
				fill="currentColor"
				d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"
			></path>
		</svg>
	),
	Note: (props) => (
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
			<g opacity="0.1">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M3.33359 14.2923L3.33483 15.0739C3.77217 14.924 4.2761 15.0235 4.62505 15.3724C4.97551 15.7229 5.07437 16.2297 4.9216 16.6684L5.69512 16.6703L6.98755 15.3779L4.61887 13.0092C3.84099 13.7858 3.33359 14.2923 3.33359 14.2923ZM12.642 5.00048L15.0046 7.36083L8.16606 14.1994L5.79838 11.8317C8.556 9.07878 12.642 5.00048 12.642 5.00048ZM15.4872 2.1553L17.8487 4.51679C18.4996 5.16765 18.5003 6.22214 17.8498 6.87268L6.68524 18.0372C6.52301 18.1995 6.20628 18.331 5.97219 18.331H2.50036C2.03983 18.331 1.6665 17.9603 1.6665 17.4972V14.0258C1.6665 13.7943 1.79993 13.4733 1.96039 13.313L13.1307 2.15364C13.7813 1.50369 14.8362 1.50434 15.4872 2.1553Z"
					fill="white"
				/>
			</g>
		</svg>
	),
	Loading: (props) => (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<style>{`
        .spinner_P7sC {
            transformOrigin: center;
            animation: spinner_svv2 .75s infinite linear;
        }
        @keyframes spinner_svv2 {
            100% {
                transform: rotate(360deg);
            }
        }
    `}</style>
			<path
				d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
				className="spinner_P7sC"
			/>
		</svg>
	),
	Search: (props) => (
		<svg width="28" height="28" fill="none" viewBox="0 0 24 24">
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
			></path>
		</svg>
	),
	Learn: (props) => (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4.75 10L12 5.75L19.2501 10L12 14.25L4.75 10Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
			<path
				d="M12.5 10C12.5 10.2761 12.2761 10.5 12 10.5C11.7239 10.5 11.5 10.2761 11.5 10C11.5 9.72386 11.7239 9.5 12 9.5C12.2761 9.5 12.5 9.72386 12.5 10Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
			<path
				d="M6.75 11.5V16.25C6.75 16.25 8 18.25 12 18.25C16 18.25 17.25 16.25 17.25 16.25V11.5"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
		</svg>
	),
	UserProfile: (props) => (
		<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
			<circle
				cx="12"
				cy="8"
				r="3.25"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
			></circle>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z"
			></path>
		</svg>
	),
	Plus: (props) => (
		<svg
			width={props.width ? props.width : "24"}
			height={props.height ? props.height : "24"}
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M12 5.75V18.25"
			></path>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M18.25 12L5.75 12"
			></path>
		</svg>
	),
	Github: (props) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			stroke={props.border ? props.border : "currentColor"}
			fill={props.fill ? props.fill : "currentColor"}
			viewBox="0 0 24 24"
		>
			<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
		</svg>
	),
	Discord: (props) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"
			/>
		</svg>
	),
	Loader: (props) => (
		<svg
			width={props.width ? props.width : "24"}
			height={props.height ? props.height : "24"}
			stroke={props.border ? props.border : "black"}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<style>{`
          .spinner_V8m1{transform-origin:center;animation:spinner_zKoa 2s linear infinite}.spinner_V8m1 circle{stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite}@keyframes spinner_zKoa{100%{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,100%{stroke-dasharray:42 150;stroke-dashoffset:-59}}`}</style>
			<g className="spinner_V8m1">
				<circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3"></circle>
			</g>
		</svg>
	),
	Delete: (props) => (
		<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M6.75 7.75L7.59115 17.4233C7.68102 18.4568 8.54622 19.25 9.58363 19.25H14.4164C15.4538 19.25 16.319 18.4568 16.4088 17.4233L17.25 7.75"
			></path>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M9.75 7.5V6.75C9.75 5.64543 10.6454 4.75 11.75 4.75H12.25C13.3546 4.75 14.25 5.64543 14.25 6.75V7.5"
			></path>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M5 7.75H19"
			></path>
		</svg>
	),
	Checkmark: (props) => (
		<svg
			width={props.width ? props.width : "20"}
			height={props.height ? props.height : "20"}
			viewBox="0 0 24 24"
			fill={props.fill ? props.fill : "none"}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.75 12.75L10 15.25L16.25 8.75"
				stroke={props.border ? props.border : "currentColor"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
		</svg>
	),
	Close: (props) => (
		<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M17.25 6.75L6.75 17.25"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M6.75 6.75L17.25 17.25"
			/>
		</svg>
	),
	Bug: (props) => (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.75 13C7.75 10.6528 9.65279 8.75 12 8.75C14.3472 8.75 16.25 10.6528 16.25 13V15C16.25 17.3472 14.3472 19.25 12 19.25C9.65279 19.25 7.75 17.3472 7.75 15V13Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 9V19"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.75 6.38333C8.75 5.48127 9.48127 4.75 10.3833 4.75H13.6167C14.5187 4.75 15.25 5.48127 15.25 6.38333C15.25 7.41426 14.4143 8.25 13.3833 8.25H10.6167C9.58574 8.25 8.75 7.41426 8.75 6.38333Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.5 14.75L6.06651 15.2713C5.27613 15.5587 4.75 16.3098 4.75 17.1509V19.25"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8 11L5.8018 9.81635C5.15398 9.46753 4.75 8.79118 4.75 8.05541V5.75"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16.5 14.75L17.9335 15.2713C18.7239 15.5587 19.25 16.3098 19.25 17.1509V19.25"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16 11L18.1982 9.81635C18.846 9.46753 19.25 8.79118 19.25 8.05541V5.75"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
	Minimise: (props) => (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10.25 18.25V13.75H5.75"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.75 5.75V10.25H18.25"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.75 19.25L10.25 13.75"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M19.25 4.75L13.75 10.25"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
	Settings: (props) => (
		<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M13.1191 5.61336C13.0508 5.11856 12.6279 4.75 12.1285 4.75H11.8715C11.3721 4.75 10.9492 5.11856 10.8809 5.61336L10.7938 6.24511C10.7382 6.64815 10.4403 6.96897 10.0622 7.11922C10.006 7.14156 9.95021 7.16484 9.89497 7.18905C9.52217 7.3524 9.08438 7.3384 8.75876 7.09419L8.45119 6.86351C8.05307 6.56492 7.49597 6.60451 7.14408 6.9564L6.95641 7.14408C6.60452 7.49597 6.56492 8.05306 6.86351 8.45118L7.09419 8.75876C7.33841 9.08437 7.3524 9.52216 7.18905 9.89497C7.16484 9.95021 7.14156 10.006 7.11922 10.0622C6.96897 10.4403 6.64815 10.7382 6.24511 10.7938L5.61336 10.8809C5.11856 10.9492 4.75 11.372 4.75 11.8715V12.1285C4.75 12.6279 5.11856 13.0508 5.61336 13.1191L6.24511 13.2062C6.64815 13.2618 6.96897 13.5597 7.11922 13.9378C7.14156 13.994 7.16484 14.0498 7.18905 14.105C7.3524 14.4778 7.3384 14.9156 7.09419 15.2412L6.86351 15.5488C6.56492 15.9469 6.60451 16.504 6.9564 16.8559L7.14408 17.0436C7.49597 17.3955 8.05306 17.4351 8.45118 17.1365L8.75876 16.9058C9.08437 16.6616 9.52216 16.6476 9.89496 16.811C9.95021 16.8352 10.006 16.8584 10.0622 16.8808C10.4403 17.031 10.7382 17.3519 10.7938 17.7549L10.8809 18.3866C10.9492 18.8814 11.3721 19.25 11.8715 19.25H12.1285C12.6279 19.25 13.0508 18.8814 13.1191 18.3866L13.2062 17.7549C13.2618 17.3519 13.5597 17.031 13.9378 16.8808C13.994 16.8584 14.0498 16.8352 14.105 16.8109C14.4778 16.6476 14.9156 16.6616 15.2412 16.9058L15.5488 17.1365C15.9469 17.4351 16.504 17.3955 16.8559 17.0436L17.0436 16.8559C17.3955 16.504 17.4351 15.9469 17.1365 15.5488L16.9058 15.2412C16.6616 14.9156 16.6476 14.4778 16.811 14.105C16.8352 14.0498 16.8584 13.994 16.8808 13.9378C17.031 13.5597 17.3519 13.2618 17.7549 13.2062L18.3866 13.1191C18.8814 13.0508 19.25 12.6279 19.25 12.1285V11.8715C19.25 11.3721 18.8814 10.9492 18.3866 10.8809L17.7549 10.7938C17.3519 10.7382 17.031 10.4403 16.8808 10.0622C16.8584 10.006 16.8352 9.95021 16.8109 9.89496C16.6476 9.52216 16.6616 9.08437 16.9058 8.75875L17.1365 8.4512C17.4351 8.05308 17.3955 7.49599 17.0436 7.1441L16.8559 6.95642C16.504 6.60453 15.9469 6.56494 15.5488 6.86353L15.2412 7.09419C14.9156 7.33841 14.4778 7.3524 14.105 7.18905C14.0498 7.16484 13.994 7.14156 13.9378 7.11922C13.5597 6.96897 13.2618 6.64815 13.2062 6.24511L13.1191 5.61336Z"
			></path>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M13.25 12C13.25 12.6904 12.6904 13.25 12 13.25C11.3096 13.25 10.75 12.6904 10.75 12C10.75 11.3096 11.3096 10.75 12 10.75C12.6904 10.75 13.25 11.3096 13.25 12Z"
			></path>
		</svg>
	),
	FileSearch: (props) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="28"
			height="28"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M17.25 9.25V10a.75.75 0 0 0 .53-1.28l-.53.53Zm-4.5-4.5.53-.53a.75.75 0 0 0-.53-.22v.75ZM10.25 20a.75.75 0 0 0 0-1.5V20Zm7.427-3.383a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm1.043 3.163a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-.94-11.06-4.5-4.5-1.06 1.06 4.5 4.5 1.06-1.06ZM12.75 4h-6v1.5h6V4ZM4 6.75v10.5h1.5V6.75H4ZM6.75 20h3.5v-1.5h-3.5V20ZM12 4.75v3.5h1.5v-3.5H12ZM13.75 10h3.5V8.5h-3.5V10ZM12 8.25c0 .966.784 1.75 1.75 1.75V8.5a.25.25 0 0 1-.25-.25H12Zm-8 9A2.75 2.75 0 0 0 6.75 20v-1.5c-.69 0-1.25-.56-1.25-1.25H4ZM6.75 4A2.75 2.75 0 0 0 4 6.75h1.5c0-.69.56-1.25 1.25-1.25V4Zm8.485 14.47a3.235 3.235 0 0 0 3.236-3.235h-1.5c0 .959-.777 1.736-1.736 1.736v1.5Zm0-4.97c.959 0 1.736.777 1.736 1.735h1.5A3.235 3.235 0 0 0 15.235 12v1.5Zm0-1.5A3.235 3.235 0 0 0 12 15.235h1.5c0-.958.777-1.735 1.735-1.735V12Zm0 4.97a1.735 1.735 0 0 1-1.735-1.735H12a3.235 3.235 0 0 0 3.235 3.236v-1.5Zm1.382.707 2.103 2.103 1.06-1.06-2.103-2.103-1.06 1.06Z"
			></path>
		</svg>
	),
	ThinArrowDown: (props) => (
		<svg
			width="15"
			height="8"
			viewBox="0 0 13 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				opacity="0.4"
				d="M11.613 0.727806C11.9303 0.424065 12.4447 0.424065 12.762 0.727806C13.0793 1.03155 13.0793 1.52401 12.762 1.82775L7.07452 7.27219C6.75722 7.57594 6.24278 7.57594 5.92548 7.27219L0.237975 1.82775C-0.0793257 1.52401 -0.0793257 1.03155 0.237975 0.727806C0.555276 0.424065 1.06972 0.424065 1.38702 0.727806L6.5 5.62228L11.613 0.727806Z"
				fill="white"
			/>
		</svg>
	),
	ArrowDown: (props) => (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill={props.fill ? props.fill : "currentColor"}
			stroke={props.border ? props.border : "currentColor"}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 15.25L16.25 9.75H7.75L12 15.25Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
		</svg>
	),
	Hat: (props) => (
		<svg
			width="20"
			height="16"
			viewBox="0 0 20 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.8139 12.2822C5.9787 12.4615 6.25896 12.7205 6.54299 12.909C7.38682 13.4692 8.51466 13.811 9.9837 13.811C11.4525 13.811 12.5789 13.4693 13.4206 12.9094C13.7039 12.7211 14.041 12.4504 14.1472 12.2831V8.78922L11.0902 10.2439C10.4487 10.5492 9.51229 10.5489 8.87278 10.2434L5.8139 8.78199V12.2822ZM4.14724 7.98573L0.474098 6.23088C-0.158499 5.92866 -0.157899 5.02793 0.4751 4.72655L8.86989 0.729639C9.5112 0.424303 10.4485 0.423409 11.0892 0.727236L19.5214 4.726C20.1559 5.02692 20.1565 5.92968 19.5224 6.23144L19.1472 6.40996V10.3806C19.403 10.6095 19.5639 10.9421 19.5639 11.3123C19.5639 12.0026 19.0043 12.5623 18.3139 12.5623C17.6235 12.5623 17.0639 12.0026 17.0639 11.3123C17.0639 10.9421 17.2248 10.6095 17.4806 10.3806V7.20305L15.8139 7.99614V12.5488C15.8165 12.7007 15.7776 12.8552 15.693 12.9946C15.6269 13.1034 15.512 13.2599 15.3425 13.447C15.0765 13.7407 14.7452 14.0301 14.3437 14.2972C13.229 15.0386 11.7816 15.4776 9.9837 15.4776C8.18601 15.4776 6.73767 15.0387 5.62123 14.2976C5.21917 14.0307 4.88726 13.7415 4.62057 13.448C4.45065 13.261 4.33536 13.1048 4.26911 12.9962C4.18384 12.8564 4.14465 12.7014 4.14724 12.5489V7.98573ZM9.58636 2.23445L2.7649 5.47822L9.59125 8.73952C9.77692 8.82822 10.1862 8.82834 10.374 8.73897L17.2178 5.48233L10.375 2.23315C10.1873 2.14409 9.77531 2.14449 9.58636 2.23445Z"
				fill="#D29752"
			/>
		</svg>
	),
	ArrowRight: (props) => (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14.25 12L8.75 7.75V16.25L14.25 12Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
		</svg>
	),
	Check: (props) => (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.75 12.75L10 15.25L16.25 8.75"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
		</svg>
	),
	VectorArrowRight: (props) => (
		<svg
			width="7"
			height="13"
			viewBox="0 0 7 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				opacity="0.5"
				d="M0.227806 1.38702C-0.0759354 1.06972 -0.0759354 0.555277 0.227806 0.237976C0.531547 -0.0793252 1.02401 -0.0793252 1.32775 0.237976L6.77219 5.92548C7.07594 6.24278 7.07594 6.75722 6.77219 7.07452L1.32775 12.762C1.02401 13.0793 0.531547 13.0793 0.227806 12.762C-0.0759354 12.4447 -0.0759354 11.9303 0.227806 11.613L5.12228 6.5L0.227806 1.38702Z"
				fill="white"
			/>
		</svg>
	),
} as const satisfies Record<string, (props: BaseIconProps) => React.JSX.Element>

interface IconProps extends BaseIconProps {
	name: keyof typeof icons
}

export default function Icon(props: IconProps): React.JSX.Element {
	return <>{icons[props.name](props)}</>
}