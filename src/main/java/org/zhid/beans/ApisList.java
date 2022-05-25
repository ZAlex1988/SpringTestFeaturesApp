package org.zhid.beans;

import java.util.List;

public class ApisList {
    private int count;
    private List<ApisListItem> entries;

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public List<ApisListItem> getEntries() {
        return entries;
    }

    public void setEntries(List<ApisListItem> entries) {
        this.entries = entries;
    }

    @Override
    public String toString() {
        return "ApisList{" +
                "count=" + count +
                ", entries=" + entries +
                '}';
    }
}
