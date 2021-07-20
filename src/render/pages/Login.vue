<template>
  <div class="login">
    <el-row>
      <el-col :span="12" :xs="23" :md="10">
        <el-card>
          <template #header>
            <div class="header">Login</div>
          </template>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
