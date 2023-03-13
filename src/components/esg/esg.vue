<template>
  <div class="internationnal">
    <img class="headimg" src="src/assets/img/ESG-img (2).jpg" alt="" />

    <div class="centerbody">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>ESG报告分析</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="wrapper">
        <el-form :model="form" label-width="120px">
          <el-form-item label="公司名称">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="社会信用代码">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="法定代表人">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="Instant delivery">
            <el-switch v-model="form.delivery" />
          </el-form-item>
          <el-form-item label="Activity type">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="Online activities" name="type" />
              <el-checkbox label="Promotion activities" name="type" />
              <el-checkbox label="Offline activities" name="type" />
              <el-checkbox label="Simple brand exposure" name="type" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Resources">
            <el-radio-group v-model="form.resource">
              <el-radio label="Sponsor" />
              <el-radio label="Venue" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Activity form">
            <el-input v-model="form.desc" type="textarea" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style lang="scss" scoped>
@import './esg.scss';
</style>
