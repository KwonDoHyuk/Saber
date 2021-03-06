package com.saber404.api.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Builder
@Entity
@NoArgsConstructor
public class Comment extends BaseEntity {

    private String content;

    private LocalDateTime regTime;

    @Column(name="del_yn", columnDefinition="BOOLEAN DEFAULT false")
    private boolean delYn;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "community_id")
    private Community community;

    public void modifyComment(String content) {
        this.content = content;
    }

    public void deleteComment() {
        this.delYn = true;
    }

    public Comment(String content, LocalDateTime regTime, boolean delYn, User user, Community community) {
        super();
        this.content = content;
        this.regTime = regTime;
        this.delYn = delYn;
        this.user = user;
        this.community = community;
    }

}