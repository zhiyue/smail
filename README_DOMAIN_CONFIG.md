# 域名配置说明

本项目支持自定义域名配置，您可以轻松将 `deploy.cv` 替换为您自己的域名。

## 配置方法

### 1. 开发环境配置

在项目根目录创建 `.env` 文件（已提供 `.env.example` 作为模板）：

```env
VITE_DOMAIN=yourdomain.com
VITE_PROTOCOL=https
```

### 2. 生产环境配置（Cloudflare Workers）

在 `wrangler.toml` 或 `wrangler.jsonc` 中配置环境变量：

```json
{
  "vars": {
    "DOMAIN": "yourdomain.com",
    "PROTOCOL": "https"
  },
  "routes": [
    {
      "pattern": "yourdomain.com",
      "custom_domain": true
    }
  ]
}
```

或者通过 Cloudflare Workers 控制台设置环境变量：
- 进入 Workers & Pages
- 选择您的项目
- 进入设置 > 环境变量
- 添加 `DOMAIN` 和 `PROTOCOL` 变量

### 3. 使用 Wrangler CLI 设置

```bash
wrangler secret put DOMAIN
# 输入: yourdomain.com

wrangler secret put PROTOCOL  
# 输入: https
```

## 配置项说明

- `DOMAIN`: 您的域名（例如：`example.com`）
- `PROTOCOL`: 协议类型（`http` 或 `https`，建议使用 `https`）

## 自动生成的邮箱地址

系统会自动基于您的域名生成以下邮箱地址：
- 临时邮箱：`random-name-1234@yourdomain.com`
- 支持邮箱：`support@yourdomain.com`
- 隐私邮箱：`privacy@yourdomain.com`
- 法务邮箱：`legal@yourdomain.com`

## 注意事项

1. 修改域名后，请确保您的域名已正确配置 MX 记录指向 Cloudflare Email Routing
2. 更新 Cloudflare Workers 的路由配置以匹配新域名
3. 如果使用自定义域名，请确保在 Cloudflare 中正确配置 Email Routing