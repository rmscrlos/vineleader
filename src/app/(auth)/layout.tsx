const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="absolute w-full h-full flex items-center justify-center bg-white z-10">
			{children}
		</div>
	);
};

export default AuthLayout;
