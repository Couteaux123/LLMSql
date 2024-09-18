**# LLMSql**

**## Installing SQLCoder**

If running on a device with an NVIDIA GPU with more than 16GB VRAM (best performance)

```
pip install "sqlcoder[transformers]"
```
```
pip install -r requirements.txt
```
**## Running SQLCoder**

In your terminal, run

```
sqlcoder launch
```

Then you need to replace some files into the installed package:

```
/anaconda3/envs/<your env name>/lib/python3.10/site-packages/sqlcoder/
```

The names of these files：

```
sqlcoder/query_routes.py
sqlcoder/cli.py
sqlcoder/static/_next/static/chunks/pages/index-a1b2fa2d87d27d8d.js
sqlcoder/static/_next/static/chunks/pages/extract-metadata-2dc614052128d5d3.js
```

