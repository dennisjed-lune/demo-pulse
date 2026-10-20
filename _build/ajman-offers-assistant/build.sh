set -e
cd "$(dirname "$0")"
python3 patch.py && python3 pack.py /Users/dennisjedburgh/code/ux/pulse-demo/ajman-offers-assistant.html | tail -1
python3 patch.py --sales && python3 pack.py /Users/dennisjedburgh/code/ux/pulse-demo/offers-assistant.html | tail -1
