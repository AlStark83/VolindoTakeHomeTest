import { getData } from "./getData";

export default async function Page() {
	const data = await getData();

	return (
		<main>
			{
				// <ul>
				<div className="mb-32 grid text-center lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
					{data.map(
						(item: { id: string; title: string; description: string }) => (

							<a
								key={item.id}
								href={`http://localhost:3000/notes/${item.id}`}
								className="rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
							>
								<h2 className={`mb-3 text-2xl font-semibold w-full`}>
									♦ {item.title}{" "}
								</h2>
								<p className={`m-0 text-sm opacity-50 w-full`}>
									{item.description}
								</p>
							</a>
						)
					)}
				</div>
			}
		</main>
	);
}
