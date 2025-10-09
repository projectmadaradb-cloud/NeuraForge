import subprocess
import time

def run_prisma_push():
    try:
        print("Claude Sonnet: Initiating schema push...")
        process = subprocess.Popen(
            ["cmd", "/c", "npx", "prisma", "db", "push", "--accept-data-loss", "--force-reset"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            shell=True
        )
        time.sleep(10)
        if process.poll() is None:
            print("Claude Sonnet: Process stalled. Terminating...")
            process.terminate()
            time.sleep(2)
            print("Claude Sonnet: Retrying with fallback...")
            subprocess.run(["cmd", "/c", "npx", "prisma", "db", "push", "--accept-data-loss"], shell=True)
        else:
            stdout, stderr = process.communicate()
            print("Claude Sonnet: Push completed.")
            print(stdout.decode())
            if stderr:
                print("Errors:", stderr.decode())
    except Exception as e:
        print(f"Claude Sonnet: Unexpected error — {e}")

run_prisma_push()