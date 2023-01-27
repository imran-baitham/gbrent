{/_ <div className="md:py-10 container_main">
<h1 className="pt-3 md:pt-0 pb-6 md:pb-9 font-bold text-xl md:text-2xl">
Blogs & Atricles
</h1>
<div className="grid md:grid-cols-3 gap-2">
{Blogs.map((data, index) => {
return (
<GridCard
key={index}
className={index === 1 ? 'md:col-span-2' : ''}
url={data.url}
image={data.image}
title={data.title}
subtitle={data.subtitle}
/>
)
})}
</div>
</div> _/}
