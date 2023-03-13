<template>
  <div class="internationnal">
    <img class="headimg" src="src/assets/img/international-img.jpg" alt="" />

    <div class="centerbody">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>国际标准</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="wrapper">
        <el-skeleton />
        <br />
        <el-skeleton style="--el-skeleton-circle-size: 100px" animated>
          <template #template>
            <el-skeleton-item variant="circle" />
          </template>
        </el-skeleton>
        <el-skeleton />
        <br />
        <el-skeleton style="--el-skeleton-circle-size: 100px">
          <template #template>
            <el-skeleton-item variant="circle" />
          </template>
        </el-skeleton>
        <el-skeleton />
        <br />
        <el-skeleton style="--el-skeleton-circle-size: 100px">
          <template #template>
            <el-skeleton-item variant="circle" />
          </template>
        </el-skeleton>
        <el-skeleton />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import './international.scss';
</style>
