<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <img
            src="src/assets/img/logo (4).png"
            style="width: 50px; height: 50px; margin-right: 200px"
          />
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">ESG分析</el-menu-item>
          <el-menu-item index="3">ESG通行标准</el-menu-item>
          <el-sub-menu index="4">
            <template #title>政策法规</template>
            <el-menu-item index="2-1">国内政策</el-menu-item>
            <el-menu-item index="2-2">法律法规</el-menu-item>
          </el-sub-menu>
          <!-- 下拉 -->
          <div class="flex flex-wrap items-center">
            <el-dropdown>
              <el-button type="primary" color="rgb(255,165,5)" :dark="isDark">
                系统登陆<el-icon class="el-icon--right"><arrow-down /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>企业登陆</el-dropdown-item>
                  <el-dropdown-item>机构登陆</el-dropdown-item>
                  <el-dropdown-item>政府登陆</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <!-- 搜索框 -->
          <div class="mt-4">
            <el-input v-model="input3" placeholder="Please input" class="input-with-select">
              <template #append>
                <el-button :icon="Search" />
              </template>
            </el-input>
          </div>
        </el-menu>
      </el-header>
      <!--页面主体 -->
      <el-main>
        <img class="headimg" src="src/assets/img/building-headimg.jpg" alt="" />
        <!-- 中间对齐的页面 -->
        <div class="centerbody">
          <div class="warpper">
            <div class="header">
              <!-- 上面的黄色条纹 -->
              <div class="titleBox">
                <div class="header-line"></div>
                <div class="titleTextBox">ESG报告</div>
              </div>
              <span>
                ESG包含环境(ENVIRONMENTAL)、社会责任(SOCIAL)与公司治理(GOVERNANCE)三个维度。
              </span>
            </div>
            <!-- esg报告下面图片后的内容 -->
            <div class="middle">
              <div class="headerimg">
                <img src="src/assets/img/ESG-Criterias.png" alt="ESGimg" />
              </div>
              <div class="flexbox">
                <div class="1"></div>
                <div class="2"></div>
                <div class="3"></div>
              </div>
            </div>
          </div>
        </div>
      </el-main>
      <el-footer> </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
//设置导航激活
import { ref } from 'vue'
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import { ArrowDown } from '@element-plus/icons-vue'
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
@import './home.scss';
</style>
