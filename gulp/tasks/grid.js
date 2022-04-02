import smartgrid from "smart-grid";

export const grid = (done) => {
	let settings = {
		outputStyle: 'scss',
		columns: 12,
		offset: "10px",
		mobileFirst: true,
		container: {
			maxWidth: "1315px",
			fields: "10px"
		},
		breakPoints: {
			xl: {
				width: "1200px",
			},
			md: {
				width: "1024px",
			},
			sm: {
				width: "768px"
			},
			xs: {
				width: "576px"
			}
		},
	};
	smartgrid('src/scss/vendors', settings);
	done();
}