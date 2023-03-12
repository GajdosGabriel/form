<template>
    <div class="relative before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 before:px-2 before:py-1.5 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible"
        :data-tip="description">
        <div class="bg-gray-500 text-white text-sm px-2  ml-2 rounded text-center">
            ?
            <slot name="description"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['description']
}
</script>