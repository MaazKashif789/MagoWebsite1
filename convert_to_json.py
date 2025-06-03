import pandas as pd
import sys
import os

def excel_to_json(excel_file, json_file):
    # Read the first sheet of the Excel file
    df = pd.read_excel(excel_file, sheet_name=0)
    # Convert to JSON and save
    df.to_json(json_file, orient='records', indent=2)
    print(f"Converted {excel_file} to {json_file}")

if __name__ == "__main__":
    # Usage: python convert_to_json.py input.xlsx output.json
    
    excel_file = "product_file.xlsx"
    json_file = "product_file.json"
    if not os.path.exists(excel_file):
        print(f"File not found: {excel_file}")
        sys.exit(1)
    excel_to_json(excel_file, json_file)